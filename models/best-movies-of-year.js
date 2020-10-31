const mongoose = require('mongoose')

const movieModel = require('./movies')

const model = new mongoose.Schema({
    year: { type: String },
    listMovies: [{ type: movieModel }]
})

module.exports = mongoose.model('bestMoviesOfYear', model)
