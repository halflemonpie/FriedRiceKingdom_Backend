const mongoose = require('../db/connections');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  complete: Boolean,
  Project: [
    {
      ref: 'Project',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
