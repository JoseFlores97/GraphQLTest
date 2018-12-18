const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number
})

module.exports = mongoose.model('User', userSchema)
