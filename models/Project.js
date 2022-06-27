const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
<<<<<<< HEAD
  name: String,
  description: String,
  category: String,
  importance: Number,
  date: Date,
  complete: Boolean,
  tasks: [
    {
      ref: 'Task',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
=======
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
>>>>>>> 102ccc2224da479617967f5ef7ec4530187a0b3f
