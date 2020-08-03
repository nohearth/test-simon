'use strict'
const { Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    creationDate: {
      type: DataTypes.DATEONLY
    },
    userId: {
      type: DataTypes.UUID
    },
    ownerName: {
      type: DataTypes.STRING
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

  Document.associate = function (models) {
    Document.hasMany(models.RecordDocument, {foreingKey: 'documentId'})
    Document.belongsToMany(models.User, { through: models.SharedDocument })
    Document.hasMany(models.SharedDocument, {foreingKey: 'documentId'})
  }
  Document.sync()
  return Document
}