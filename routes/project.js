const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');


router.get('/', projectController.index)
router.get('/:id', projectController.show)
router.post('/', projectController.create)
router.put('/:id', projectController.edit)
router.delete('/:id', projectController.delete)
router.put('/newTodo/:id', projectController.createNewTodo)
router.get('/project/:category', projectController.showCat)
router.get('/name/:name', projectController.showName)


module.exports = router;
