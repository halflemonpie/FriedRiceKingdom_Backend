const mongoose = require('../db/connections');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  description: String,
  category: String,
  importance: String,
  date: Date,
  complete: Boolean,
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
