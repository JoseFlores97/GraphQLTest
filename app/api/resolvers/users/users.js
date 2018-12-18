const UserController = require('../../../Http/Controllers/UserController')

const resolversQuery = {
  users: UserController.index
}

const resolversMutation = {
  createUser: UserController.store
}

module.exports = { resolversQuery, resolversMutation }
