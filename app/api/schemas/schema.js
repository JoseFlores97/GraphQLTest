const { getSchema } = require('../../globals')

const userSchema = getSchema('users', 'users')
const userTypes = getSchema('users', 'types')
const userMutations = getSchema('users', 'usersMutations')

const typeDefs = `
  type Query {
    ${userSchema}
  }
  ${userTypes}
  type Mutation {
    ${userMutations}
  }
`

module.exports = typeDefs
