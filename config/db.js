const sequelize = require('sequelize')

const db = new sequelize('perjalanandinas','root','',{
    dialect: 'mysql'
})

module.exports = db