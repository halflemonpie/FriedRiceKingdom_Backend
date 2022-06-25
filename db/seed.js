const Project = require('../models/Project')
const Task = require("../models/Task")

Project.deleteMany({}).then(() => {
    console.log('deleted all projects')
    Task.deleteMany({}).then(() => {
        console.log('deleted all tasks');

    Project.create(
      {
        name: "High School reunion",
        description: "10 year high school reunion! Welcome back Class of 2012!",
        category: "Gathering",
        importance: 2,
        type: "Reunion",
        date: 07/26/2022,
        complete: false
      }
      
    ).then((project) => {
        Task.create({
            name: "Buy Champagne",
            complete: true  
        })
        .then(task => {
            project.tasks.push(task)
            project.save()
            console.log('created Project:Task')
        }) 
    });
  });
}) 


