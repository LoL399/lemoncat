const mongoose = require("mongoose");

const movieModel = require("./movies");

const model = new mongoose.Schema({
  year: { type: String },
  listMovies: [
    {
      nameOfAward: { type: String },
      movie: { type: movieModel },
    },
  ],
});

module.exports = mongoose.model("moviesAwardWinners", model);
