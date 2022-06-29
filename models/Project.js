const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    description: String,
    category: String,
    importance: Number,
    date: Date,
    complete: Boolean,
    image: String,
    tasks:[{
        ref: "Task",
        type: Object
    }]
  })
  const Project = mongoose.model('Project', projectSchema)
  module.exports = Project