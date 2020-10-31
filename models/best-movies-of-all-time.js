const mongoose = require('mongoose')

const movieModel = require('./movies')

const model = new mongoose.Schema({
    listMovies: [{ type: movieModel }]
})

module.exports = mongoose.model('bestMoviesOfAllTime', model)