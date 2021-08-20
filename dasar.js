const exp = require('express')
const app = exp()
const port = 3000
const author = 'Achmad Fathoni'

const db = require('./config/db')
const dasar = require('./model/dasar')

db.authenticate().then(() => {
    console.log('Berhasil terkoneksi database')
})
app.use(exp.urlencoded({ extended:true }))

app.post('/dasar/create', async(req,res) => {
    try {
        const { nama_dasar, tgl_dasar, peruntukan } = req.body
        const InsertDasar = new dasar({
            nama_dasar,
            tgl_dasar,
            peruntukan
        })
        await InsertDasar.save()
        res.json(InsertDasar)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.put('/dasar/update/:id', async(req,res) => {
    try {
        const id = req.params.id
        const { nama_dasar, tgl_dasar, peruntukan } = req.body
        const UpdateDasar = dasar.update({
            nama_dasar,
            tgl_dasar,
            peruntukan
        }, { where: { id:id }})
        await UpdateDasar
        res.json('Data berhasil di update')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.get('/dasar/view', async(req,res) => {
    try {
        const ViewDasar = await dasar.findAll({})
        res.json(ViewDasar)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.get('/dasar/view/:id', async(req,res) => {
    try {
        const id = req.params.id
        const DasarId = await dasar.findOne({ where: { id:id }})
        res.json(DasarId)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.delete('/dasar/delete/:id', async(req,res) => {
    try {
        const id = req.params.id
        const DeleteDasar = await dasar.destroy({ where: { id:id }})
        res.json('Data berhasil di delete')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.listen(port, () => {
    console.log(`${author} berhasil masuk di http://localhost:${port}/`)
})