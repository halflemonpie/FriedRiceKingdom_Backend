const mongoose = require('../db/connections');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  description: String,
  category: String,
  importance: String,
  date: Date,
  complete: Boolean,
  task: [
    {
      ref: 'Task',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
