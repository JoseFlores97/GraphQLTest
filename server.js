const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer, gql } = require('apollo-server-express')

const app = express()

const schema = require('./app/api/schemas/schema')
const typeDefs = gql(schema)

const resolvers = require('./app/api/resolvers/resolver')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

server.applyMiddleware({ app })

mongoose
  .connect(`mongodb://localhost:27017/graphql`)
  .then(() => {
    app.listen({ port: 4000 }, () => {
      console.log(`http://localhost:4000${server.graphqlPath}`)
    })
  })
  .catch(err => {
    console.log(err)
  })
