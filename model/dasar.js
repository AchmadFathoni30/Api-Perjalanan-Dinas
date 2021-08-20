const db = require('../config/db')
const Objek = require('sequelize')

const dasar = db.define('dasar',{
    nama_dasar: { type:Objek.STRING },
    tgl_dasar: { type:Objek.DATE },
    peruntukan: { type:Objek.STRING },
}, { freezeTableName:true })

module.exports = dasar