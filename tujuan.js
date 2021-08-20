const exp = require('express')
const app = exp()
const port = 2000
const author = 'Achmad Fathoni'

const db = require('./config/db')
const tujuan = require('./model/tujuan')

db.authenticate().then(() => {
    console.log('Berhsil terkoneksi database')
})

app.use(exp.urlencoded({ extended:true }))

app.get('/tujuan/view', async(req,res) => {
    try {
        const ViewTujuan = await tujuan.findAll({})
        res.json(ViewTujuan)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error')
    }
})

app.get('/tujuan/view/:id', async(req,res) => {
    try {
        const id = req.params.id
        const TujuanId = await tujuan.findOne({ where: { id:id }})
        res.json(TujuanId)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.post('/tujuan/create', async(req,res) => {
    try {
        const { nama_tujuan, transport } = req.body
        const NewTujuan = new tujuan({
            nama_tujuan,
            transport
        })
        await NewTujuan.save()
        res.json(NewTujuan)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.put('/tujuan/update/:id', async(req,res) => {
    try {
        const id = req.params.id
        const { nama_tujuan, transport } = req.body
        const UpdateTujuan = tujuan.update({
            nama_tujuan,
            transport
        }, { where: { id:id }})
        await UpdateTujuan
        res.json('Data berhasil di update')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.delete('/tujuan/delete/:id', async(req,res) => {
    try {
        const id = req.params.id
        const DeleteTujuan = await tujuan.destroy({ where: { id:id }})
        res.json('Data berhasil di delete')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.listen(port, () => {
    console.log(`${author} berhasil masuk di http://localhost:${port}/`)
})