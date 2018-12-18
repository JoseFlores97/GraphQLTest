const {
  resolversQuery,
  resolversMutation
} = require('../resolvers/users/users')

const resolvers = {
  Query: {
    ...resolversQuery
  },
  Mutation: {
    ...resolversMutation
  }
}

module.exports = resolvers
