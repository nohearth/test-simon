const path = require('path')

module.exports = {
  'migrationDirectory': path.join(__dirname, '../migrations'),
  'driver': 'pg',
  'host': process.env.host || '127.0.0.1',
  'port': 5432,
  'database': process.env.TEST_DATABASE || 'testSimon',
  'username': process.env.TEST_USERNAME || 'postgres',
  'password': process.env.TEST_PASSWORD || 'admin123',
  validateChecksums: false
}