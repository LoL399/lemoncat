const mongoose = require('mongoose')

const model = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  birthDate: { type: Date },
  bornIn: { type: String },
  summary: { type: String },
  poster: { type: String },
  photos: [{ type: String }],
}, {
  timestamps: false
})

module.exports = mongoose.model('persons', model)