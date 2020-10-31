let User = require('../models/users')

exports.createUser = (req, res) => {
    const user = {
        phone: req.body.phone,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo,
        role: req.body.role,
        status: true,
        review: [],
        news: []
    }

    const newUser = new User(user)

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.updateUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.password = req.body.password
            user.name = req.body.name
            user.phone = req.body.phone
            user.photo = req.body.photo
            user.status = req.body.status
            user.role = req.body.role

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.deleteUserById = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
}