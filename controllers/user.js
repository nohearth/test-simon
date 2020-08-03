const sUser = require('../services/user')

async function createUser(req, res) {
  try {
    const user = await sUser.createUser(req.body)
    res.json({message: 'Create success'})
  } catch (e) {
    res.json({message: e})
  }
}

module.exports = {
  createUser
}