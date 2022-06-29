const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');

router.get('/', taskController.index)
router.get('/:id', taskController.search)
router.post('/', taskController.create)
router.put('/:id', taskController.edit)
router.delete('/:id', taskController.delete)

module.exports = router;
