const { DataTypes } = require('sequelize')
const db = require('../config/db')

const User = require('./user') 
const Document = require('./document')

const ShareDocument = db.define('ShareDocument', {
  shareStatus: {
    type: DataTypes.STRING,
  }
})