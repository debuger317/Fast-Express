const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Id:{
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
        required: false,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        unique: false,
        default: 'user',
    },
    status: {
        type: String,
        required: true,
        unique: false,
        default: 'active',
    },
    address: {
        type: String,
        minlength: 5,
        required: true,
        unique: false,
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