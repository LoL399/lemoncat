const controller = require('../controllers/users')

const router = require('express').Router()

router.post('/create', controller.createUser)

router.get('/', controller.getAllUsers)

router.get('/:id', controller.getUserById)

router.put('/update/:id', controller.updateUserById)

router.delete('/delete/:id', controller.deleteUserById)

module.exports = router