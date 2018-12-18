const User = require('../../Models/Users/User')

const UserController = {
  async index () {
    const users = await User.find()
    return users
  },
  async store (_, args) {
    const user = await User.create(args.user)
    return user
  }
}

module.exports = UserController
