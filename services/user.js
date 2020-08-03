const User = require('../models').User
const { throwException } = require('../utils/validation')


async function createUser(data) {
  const user = await User.create(data)
  return user
}

async function getUser(id) {
  const user =  await User.findOne({
    where: {id}
  })
  if(!user) {
    throwException(`The User with the ID ${id} don't exits`)
  }
  return user
}

module.exports = {
  createUser,
  getUser
}