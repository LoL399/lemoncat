const mongoose = require('mongoose')

const movieModel = require('./movies')

const scoreModel = require('./scores')

const Schema = mongoose.Schema

const model = new Schema({
    byUser: { type: Schema.Types.ObjectId, ref: 'users' },
    content: { type: String, required: true },
    forMovie: { type: movieModel },
    userScore: { type: Number, required: true },
    score: [{ type: scoreModel }],
    totalScore: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    tag: [{ type: String }],
    comment: [{
        comment: { type: Schema.Types.ObjectId, ref: 'comments' },
        score: [{ type: scoreModel }],
        totalScore: { type: Number, default: 0 },
        subComment: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('reviews', model)