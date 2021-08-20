const db = require('../config/db')
const Objek = require('sequelize')

const tujuan = db.define('tujuan',{
    nama_tujuan: { type:Objek.STRING },
    transport: { type:Objek.NUMBER },
}, { freezeTableName:true })

module.exports = tujuan