'use strict'

module.exports = (sequelize, DataTypes) => {
  const RecordDocument = sequelize.define('RecordDocument', {
    description: {
      type: DataTypes.STRING
    },
    recordDate: {
      type: DataTypes.DATEONLY
    }
  }, {
    timestamps: false,
    tableName: 'recordDocument',
    name: {
      singular: 'recordDocument',
      plural: 'recordDocuments'
    }
  })
  RecordDocument.associate = function (models) {
    RecordDocument.belongsTo(models.Document, {foreingKey: 'documentId'})
  }
  return RecordDocument
}