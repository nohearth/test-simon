const User = require('../models/user')
const db = require('../config/db')

async function createUser(data) {
  const user = await User.create(data)
  return user
}

module.exports = {
  createUser
}