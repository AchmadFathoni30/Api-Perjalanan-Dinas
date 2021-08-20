
const exp = require('express')
const app = exp()
const port = 5000
const author = 'Achmad Fathoni'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = require('./config/db')
const pegawai = require('./model/pegawai')

app.use(exp.urlencoded({ extended:true }))
db.authenticate().then(() => {
    console.log('Berhasil terkoneksi database')
})

app.post('/register', (req,res) => {
    try {
        const { password } = bcrypt.hashSync(req.body)
        const { nik, nama, alamat, no_telp, golongan, is_active} = req.body
        const RegisterPegawai = new pegawai.save()
        await RegisterPegawai
        res.json()
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

app.listen(port, () => {
    console.log(`${author} berhasil masuk di port http://localhost:${port}/`)
})