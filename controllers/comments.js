let Comment = require('../models/comments')

exports.createComment = (req, res) => {
    var comment = {
        byUser: req.body.byUser,
        content: req.body.content
    }

    const newComment = new Comment(comment)

    newComment.save()
        .then(() => res.json('Comment added!'))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getAllComments = (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getCommentById = (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.updateCommentById = (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => {
            comment.content = req.body.content
            
            comment.save()
                .then(() => res.json('Comment updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.deleteCommentById = (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Comment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
}