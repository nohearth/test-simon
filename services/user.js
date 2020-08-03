const User = require('../models').User


async function createUser(data) {
  const user = await User.create(data)
  return user
}

async function getUser(id) {
  const user =  await User.findOne({
    where: {id}
  })
  return user
}

module.exports = {
  createUser,
  getUser
}