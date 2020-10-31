let Person = require('../models/persons')

exports.createPerson = (req, res) => {
    var Person = {
        name: req.body.name,
        birthDate: req.body.birthDate,
        bornIn: req.body.bornIn,
        summary: req.body.summary,
        poster: req.body.poster,
        photos: req.body.photos
    }

    const newPerson = new Person(Person)

    newPerson.save()
        .then(() => res.json('Person added!'))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getAllPersons = (req, res) => {
    Person.find()
        .then(Persons => res.json(Persons))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.getPersonById = (req, res) => {
    Person.findById(req.params.id)
        .then(Person => res.json(Person))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.updatePersonById = (req, res) => {
    Person.findById(req.params.id)
        .then(Person => {
            Person.name = req.body.name

            Person.save()
                .then(() => res.json('Person updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.deletePersonById = (req, res) => {
    Person.findByIdAndDelete(req.params.id)
        .then(() => res.json('Person deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
}