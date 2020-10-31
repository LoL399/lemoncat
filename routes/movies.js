const movieController = require('../controllers/movies')

const router = require('express').Router()

router.post('/create', movieController.createMovie)

router.get('/', movieController.getAllMovies)

router.get('/:id', movieController.getMovieById)

router.put('/update/:id', movieController.updateMovieById)

router.delete('/delete/:id', movieController.deleteMovieById)

module.exports = router