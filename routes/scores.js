const controller = require('../controllers/scores')

const router = require('express').Router()

router.post('/create', controller.createScore)

router.get('/', controller.getAllScores)

router.get('/:id', controller.getScoreById)

router.put('/update/:id', controller.updateScoreById)

router.delete('/delete/:id', controller.deleteScoreById)

module.exports = router