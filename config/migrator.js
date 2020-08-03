'use strict'
const Postgrator = require('postgrator')
const postgrator = new Postgrator(require('./postgrator'))

async function autoMigrate () {
  return new Promise((resolve, reject) => {
    postgrator.migrate()
      .then(appliedMigrations => {
        if (appliedMigrations.length === 0) {
          console.log('Database up to date')
          postgrator.getDatabaseVersion()
            .then(currentVer => console.log(`Current migration version: ${currentVer}`))
            .catch(err => console.error(err))
        } else {
          console.log(appliedMigrations)
        }
        resolve()
      })
      .catch(error => {
        console.error(error)
        reject(new Error('Error on Database'))
      })
  })
}

module.exports = {
  autoMigrate
}