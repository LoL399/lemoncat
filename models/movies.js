const mongoose = require("mongoose");

const personModel = require("./persons");

const movieModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    summary: { type: String },
    poster: { type: String, required: true },
    trailer: [{ type: String, required: true, unique: true }],
    studio: { type: String, required: true },
    rating: { type: String },
    genres: [{ type: String }],
    theater: { type: Date, default: null },
    lemonScore: { type: Number, default: 0 },
    userScore: { type: Number, default: 0 },
    images: [{ type: String, required: true, unique: true }],
    casts: [
      {
        person: { type: personModel },
        characterName: { type: String },
      },
    ],
    director: { type: personModel },
    writer: { type: personModel },
    canReview: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("movies", movieModel);
