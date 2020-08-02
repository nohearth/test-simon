const Sequelize = require('sequelize')

module.exports = new Sequelize(
  'testSimon',
  'postgres',
  'admin123',
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
)