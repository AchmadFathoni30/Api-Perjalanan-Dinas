const db = require('../config/db')
const Objek = require('sequelize')

const pegawai = db.define('pegawai',{
    nik: { type:Objek.STRING },
    nama: { type:Objek.STRING },
    password: { type:Objek.STRING },
    alamat: { type:Objek.STRING },
    no_telp: { type:Objek.STRING },
    golongan: { type:Objek.STRING },
    is_active: { type:Objek.STRING },
}, { freezeTableName:true })

module.exports = pegawai