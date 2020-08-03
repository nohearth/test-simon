'use strict'

module.exports = (sequelize, DataTypes) => {
  const SharedDocument = sequelize.define('SharedDocument', {
    shareStatus: {
      type: DataTypes.STRING,
      defaultValue: 'SHARED'
    }
  }, {
    timestamps: false,
    tableName: 'sharedDocument',
    name: {
      singular: 'sharedDocument',
      plural: 'sharedDocuments'
    }
  })

  SharedDocument.associate = function (models) {
    SharedDocument.belongsTo(models.Document, {foreingKey: 'documentId'})
    SharedDocument.belongsTo(models.User, {foreingKey: 'userId'})
  }

  return SharedDocument
}