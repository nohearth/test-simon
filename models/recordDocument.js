const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')
const Document = require('./document')

const RecordDocument = db.define('RecordDocument', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  description: {
    type: DataTypes.STRING
  },
  recordDate: {
    type: DataTypes.DATEONLY
  },
  documentId: {
    type: DataTypes.UUID
  }
}, {
  tableName: 'recordDocument',
  name: {
    singular: 'recordDocument',
    plural: 'recordDocuments'
  }
})

RecordDocument.sync()
//

module.exports = RecordDocument