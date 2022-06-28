const Project = require('../models/Project');
const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
      Project.find()
      .then((projects) => {
        res.json(projects);
      });
    },
    search: (req, res) => {
      Project.find(req.params.category)
      .then((project) => {
          res.json(project)
      })
    },
    create: (req, res) => {
      Project.create(req.body)
      .then((project)=>
          res.json(project)) 
      },
      edit: (req, res) => {
          Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
          .then((project) => {
              res.json(project)
          })
      },
      delete: (req, res) => {
          Project.findByIdAndDelete(req.params.id)
          .then((project) => {
              res.json(project)
          })
      },
      createNewTodo: (req, res) => {
        Project.findById(req.params.id)
          .then((project) => {
              Task.create(req.body).then((task) => {
                project.tasks.push(task)
                project.save()
                res.json(project)
              })
          })
      }
  }
  