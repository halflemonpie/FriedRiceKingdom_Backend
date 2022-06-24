const mongoose = require('../db/connections');
const Schema = mongoose.Schema;
const task = require('./task');

const projectSchema = new Schema({
  name: String,
  description: String,
  category: String,
  importance: String,
  date: Date,
  complete: Boolean,
  task: [task],
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
