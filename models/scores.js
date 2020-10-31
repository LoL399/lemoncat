const mongoose = require('mongoose')

const model = new mongoose.Schema({
    byUser: { type: Schema.Types.ObjectId, ref: 'users' },
    score: { type: Number }
})

module.exports = mongoose.model('scores', model)
