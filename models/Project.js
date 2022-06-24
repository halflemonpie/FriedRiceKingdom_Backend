const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: String,
    image: String,
    Type: String,
    Tasks:[
        {
        ref: "Task",
        type: mongoose.Schema.Types.ObjectId 
        }
       ]
  })
  const Pokemon = mongoose.model('Project', projectSchema)
  module.exports = Project