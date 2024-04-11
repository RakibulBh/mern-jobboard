const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    firsName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date
    },
    title: {
        type: String,
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;