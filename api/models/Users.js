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
        unique: false,
    },
    label: {
        type: String,
        required: true,
        unique: true,
    },

}, { timestamps: true });

module.exports = mongoose.model('users', UserSchema);