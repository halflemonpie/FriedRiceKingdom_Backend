const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  importance: { type: Number, required: true },
  date: { type: Date, required: true },
  complete: Boolean,
  image: String,
  tasks: [
    {
      ref: 'Task',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
