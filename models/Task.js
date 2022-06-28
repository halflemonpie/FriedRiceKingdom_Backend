const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String, required: true },
  complete: Boolean,
});
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
