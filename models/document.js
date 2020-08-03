'use strict'

module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    urlDocument: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
  return Document
}