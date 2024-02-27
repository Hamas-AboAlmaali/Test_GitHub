const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'super admin'],
        required: true
    },
    team: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;