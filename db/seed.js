const Project = require('../models/Project')
const Task = require("../models/Task")
const raw = require("./raw.json")

Project.deleteMany({}).then(() => {
    console.log('deleted all projects')
    Task.deleteMany({}).then(() => {
        console.log('deleted all tasks');
        Project.create(raw)
  });
}) 


