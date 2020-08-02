const router = require('express').Router()
const cUser = require('../controllers/user')

router.post('/', cUser.createUser)

module.exports = router