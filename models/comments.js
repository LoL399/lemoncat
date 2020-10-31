const mongoose = require('mongoose')

const model = new mongoose.Schema({
    byUser: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    content: { type: String, required: true }
})

module.exports = mongoose.model('comments', model)
