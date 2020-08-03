'use strict'

module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
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

  return User
}