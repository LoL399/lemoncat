let Movie = require('../models/movies')

exports.createMovie = (req, res) => {
    var movie = {
        name: req.body.name,
        summary: req.body.summary,
        poster: req.body.poster,
        trailer: req.body.trailer,
        studio: req.body.studio,
        rating: req.body.rating,
        genres: req.body.genres,
        theater: req.body.theater,
        images: req.body.images,
        casts: req.body.casts,
        director: req.body.director,
        writer: req.body.writer
    }

    const newMovie = new Movie(movie)

    newMovie.save()
        .then(() => res.json('Movie added!'))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getAllMovies = (req, res) => {
    Movie.find()
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getMovieById = (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => res.json(movie))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.updateMovieById = (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            movie.name = req.body.name,
            movie.summary = req.body.summary,
            movie.poster = req.body.poster,
            movie.trailer = req.body.trailer,
            movie.studio = req.body.studio,
            movie.rating = req.body.rating,
            movie.genres = req.body.genres,
            movie.theater = req.body.theater,
            movie.images = req.body.images,
            movie.casts = req.body.casts,
            movie.director = req.body.director,
            movie.writer = req.body.writer


            movie.save()
                .then(() => res.json('Movie updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.deleteMovieById = (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.json('Movie deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
}
