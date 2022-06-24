const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project_db', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports = mongoose;
