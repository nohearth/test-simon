const migrator = require('./config/migrator')
const express = require('express')
const { json } = require('express')
const morgan = require('morgan')
const cors = require('cors')
const db = require('./models')

const PORT = process.env.PORT || 3000

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(json())

app.get('/',(req, res) =>{
  res.send('Connected')
})

require('./routes')(app)

//Test DB
db.sequelize
  .authenticate()
  .then(() => {
    migrator.autoMigrate()
      .then(() => {
        console.log('Database connected...')
        app.listen(PORT, console.log(`Server started on port ${PORT}`))
      })
      .catch(err => { console.error(err) })
  })
  .catch(err => console.log(`Error: ${err}`))
