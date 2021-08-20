const db = require('../config/db')
const Objek = require('sequelize')

const tempat = db.define('tempat',{
    nama_tempat: { type:Objek.STRING },
    tarif_tempat: { type:Objek.NUMBER },
}, { freezeTableName:true })

module.exports = tempat