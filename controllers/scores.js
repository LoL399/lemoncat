let Score = require('../models/scores')

exports.createScore = (req, res) => {
    var Score = {
        byUser: req.body.byUser,
        score: req.body.score
    }

    const newScore = new Score(Score)

    newScore.save()
        .then(() => res.json('Score added!'))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getAllScores = (req, res) => {
    Score.find()
        .then(Scores => res.json(Scores))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getScoreById = (req, res) => {
    Score.findById(req.params.id)
        .then(Score => res.json(Score))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.updateScoreById = (req, res) => {
    Score.findById(req.params.id)
        .then(score => {
            score.score = req.body.score

            score.save()
                .then(() => res.json('Score updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.deleteScoreById = (req, res) => {
    Score.findByIdAndDelete(req.params.id)
        .then(() => res.json('Score deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
}