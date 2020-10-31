const controller = require('../controllers/comments')

const router = require('express').Router()

router.post('/create', controller.createComment)

router.get('/', controller.getAllComments)

router.get('/:id', controller.getCommentById)

router.put('/update/:id', controller.updateCommentById)

router.delete('/delete/:id', controller.deleteCommentById)

module.exports = router