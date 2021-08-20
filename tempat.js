const exp = require('express')
const app = exp()
const port = 4000
const author = 'Achmad Fathoni'

const db = require('./config/db')
const tempat = require('./model/tempat')

app.use(exp.urlencoded({ extended:true }))
db.authenticate().then(() => {
    console.log('Berhasil terkoneksi database')
})

app.get('/tempat/view', async(req,res) => {
    try {
        const ViewTempat = await tempat.findAll({})
        res.json(ViewTempat)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.get('/tempat/view/:id', async(req,res) => {
    try {
        const id = req.params.id
        const TempatId = await tempat.findOne({ where: { id:id }})
        res.json(TempatId)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.put('/tempat/update/:id', async(req,res) => {
    try {
        const id = req.params.id
        const { nama_tempat, tarif_tempat } = req.body
        const UpdateTempat = tempat.update({
            nama_tempat,
            tarif_tempat
        }, { where: { id:id }})
        await UpdateTempat
        res.json('Data berhasil di update')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.delete('/tempat/delete/:id', async(req,res) => {
    try {
        const id = req.params.id
        const DeleteTempat = tempat.destroy({ where: { id:id }})
        await DeleteTempat
        res.json('Data berhasil di delete') 
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.listen(port, () => {
    console.log(`${author} berhasil masuk di port http://localhost:${port}/`)
})