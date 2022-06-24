const mongoose = require('../db/connections');
const Schema = mongoose.Schema;
const project = require('./project');

const taskSchema = new Schema({
  name: String,
  complete: Boolean,
  project: [project],
});

const task = mongoose.model('task', taskSchema);

module.exports = task;
