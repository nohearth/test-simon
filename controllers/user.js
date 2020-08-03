const sUser = require('../services/user')

async function createUser(req, res) {
  try {
    const user = await sUser.createUser(req.body)
    res.json(user)
  } catch (e) {
    res.json({message: `Error: ${e}`})
  }
}

module.exports = {
  createUser
}