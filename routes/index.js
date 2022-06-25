const express = require('express');
const router = express.Router();

router.use('/projects', require('./project'));
router.use('/tasks', require('./task'));

module.exports = router;
