const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')

//const User = require('./user') 
const RecordDocument = require('./recordDocument')

const Document = db.define('Document', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  ownerName: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: `OwnerName can´t be empty.`
      }
    }
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: `Name can´t be empty.`
      }
    }
  },
  category: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: `Category can´t be empty.`
      }
    }
  },
  creationDate: {
    type: DataTypes.DATEONLY,
    validate: {
      notEmpty: {
        msg: `Date of creation can´t be empty.`
      }
    }
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'A'
  }
}, {
  tableName: 'document',
  name: {
    singular: 'document',
    plural: 'documents'
  }
})

Document.sync()
//Document.belongsTo(User, {foreingKey: 'userId'})
Document.hasMany(RecordDocument, {foreingKey: 'documentId'})
//RecordDocument.belongsTo(Document, {foreingKey: 'documentId'})

module.exports = Document