const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    name: String,
    image: String,
    Type: String,
    
  })
  const Pokemon = mongoose.model('Task', taskSchema)
  module.exports = Task