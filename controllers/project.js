const Project = require('../models/Project')

module.exports = {
    index: (req, res) => {
      Project.find()
      .then((projects) => {
        res.json(projects);
      });
    },
    show: (req, res) => {
      Project.findById(req.params.id)
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
      show: (req, res) => {
        Project.findOne(req.params.category)
        .then((project) => {
            res.json(project)
        })
      }
  }
  