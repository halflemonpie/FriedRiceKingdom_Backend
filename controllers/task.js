const Task = require('../models/Task')

module.exports = {
    index: (req, res) => {
      Task.find()
      .then((tasks) => {
        res.json(tasks);
      });
    },
    search: (req, res) => {
      Task.find(req.params.category)
      .then((task) => {
          res.json(task)
      })
    },
    create: (req, res) => {
      Task.create(req.body)
      .then((task)=>
          res.json(task)) 
      },
      edit: (req, res) => {
          Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
          .then((task) => {
              res.json(task)
          })
      },
      delete: (req, res) => {
          Task.findByIdAndDelete(req.params.id)
          .then((task) => {
              res.json(task)
          })
      }
  }
  