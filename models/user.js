'use strict'
const { Sequelize } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
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

  User.associate = function (models) {
    User.belongsToMany(models.Document, { through: models.SharedDocument })
    User.hasMany(models.SharedDocument, {foreingKey: 'userId'})
    User.hasMany(models.Document, {foreingKey: 'userId'})
  }
  User.sync()
  return User
}