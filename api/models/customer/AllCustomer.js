const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
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
    address: {
        city: {

        },
        currentlocation: {

        }
    },
    label: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('customers', CustomerSchema);