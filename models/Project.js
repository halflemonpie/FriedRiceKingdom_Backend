const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: String,
    description: String,
    category: String,
    importance: Number,
    type: String,
    date: Date,
    complete: Boolean,
    image: String,
    tasks:[
        {
        ref: "Task",
        type: mongoose.Schema.Types.ObjectId
        }
       ]
  })
  const Project = mongoose.model('Project', projectSchema)
  module.exports = Project