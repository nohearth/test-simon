const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')

//const Document = require('./document')

const User = db.define('user', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: `Name can´t be empty.`
      }
    }
  },
  lastName: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: `Last name can´t be empty.`
      }
    }
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'A'
  }
}, {
  tableName: 'user',
  name: {
    singular: 'user',
    plural: 'users'
  }
})

User.sync()
//User.hasMany(Document, {foreingKey: 'userId', sourceKey: 'id'})

module.exports = User