const express = require('express');
const router = express.Router();

router.use('/projects', require('./project'));

module.exports = router;
