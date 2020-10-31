const mongoose = require('mongoose')

const scoreModel = require('./scores')

const Schema = mongoose.Schema

const model = new Schema({
    byUser: { type: Schema.Types.ObjectId, ref: 'users' },
    category: { type: String },
    content: { type: String, required: true },
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

module.exports = mongoose.model('news', model)