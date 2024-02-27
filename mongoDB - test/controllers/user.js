const User = require('../database/user.store');

exports.addUser = (req, res, next) => {
    const { firstName, lastName, email, role, team, level } = req.body;

    const user = new User({ firstName, lastName, email, role, team, level });

    user.save()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error occurred while saving user.');
        });
};

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err)
            res.status(500).send('Error occurred while find users.');
        })
}

exports.getOneUser = (req, res, next) => {
    const userId = req.params.userId
    User.findById(userId)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('Error occurred while find a user.');
        })
}

exports.editUser = (req, res, next) => {
    const userId = req.params.userId
    const { firstName, lastName, email, role, team, level } = req.body;

    User.findById(userId)
        .then(user => {
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email
            user.role = role
            user.team = team
            user.level = level

            return user.save()
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('Error occurred while update a user.');
        })
}

exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId

    User.findByIdAndDelete(userId)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('Error occurred while deleting a user.');
        })
}

