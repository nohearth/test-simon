'use strict'
const { Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const RecordDocument = sequelize.define('RecordDocument', {
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
  return RecordDocument
}