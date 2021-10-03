const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
        default: "",
        required: false,
    },
    label: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('users', UserSchema);