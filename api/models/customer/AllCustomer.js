const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    },
    photo: {
        type: String,
        default: "",
        required: false,
    },
    address: {
        city: {
            type: String,
            required: true
        },
        currentlocation: {
            type: String,
            required: true
        }
    },
    label: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('customers', CustomerSchema);