const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 16,
        required: true,
        unique: false,
    },
    role: {
        type: String,
        required: true,
        unique: false,
        default: 'user',
    },
    address: {
        type: String,
        minlength: 5,
        required: true,
        unique: true,
    },

    phone: {
        type: Number,
        minlength: 11,
        maxlength: 11,
        required: true,
        unique: true,
    },

}, { timestamps: true });

module.exports = mongoose.model('users', UserSchema);