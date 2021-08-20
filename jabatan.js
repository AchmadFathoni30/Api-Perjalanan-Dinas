const exp = require('express')
const app = exp()
const author = 'Achmad Fathoni'
const port = 1000

const db = require('./config/db')
const jabatan = require('./model/jabatan')

app.use(exp.urlencoded({ extended:true }))
db.authenticate().then(() => {
    console.log('Berhasil terkoneksi database')
})

app.get('/jabatan/view', async(req,res) => {
    try {
        const ViewJabatan = await jabatan.findAll({})
        res.json(ViewJabatan)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.get('/jabatan/view/:id', async(req,res) => {
    try {
        const id = req.params.id
        const JabatanId = await jabatan.findOne({ where: { id:id } })
        res.json(JabatanId)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.post('/jabatan/create', async(req,res) => {
    try {
        const { nama_jabatan, uang_harian } = req.body
        const NewJabatan = new jabatan({
            nama_jabatan,
            uang_harian
        }) 
        await NewJabatan.save()
        res.json(NewJabatan)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.put('/jabatan/update/:id', async(req,res) => {
    try {
        const id = req.params.id
        const { nama_jabatan, uang_harian } = req.body
        const UpdateJabatan = jabatan.update({
            nama_jabatan,
            uang_harian
        }, { where: { id:id }})
        await UpdateJabatan
        res.json('Data berhasil di update')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.delete('/jabatan/delete/:id', async(req,res) => {
    try {
        const id = req.params.id
        const DeleteJabatan = jabatan.destroy({ where: { id:id }})
        await(DeleteJabatan)
        res.json('Data berhasil di delete')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.listen(port, () => {
    console.log(`${author} berhasil masok di http://localhost:${port}/`)
})