const db = require('../config/db')
const Objek = require('sequelize')

const jabatan = db.define('jabatan',{
    nama_jabatan: { type:Objek.STRING },
    uang_harian: { type:Objek.NUMBER },
}, { freezeTableName:true })

module.exports = jabatan