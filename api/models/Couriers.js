const mongoose = require('mongoose');

const CourierSchema = new mongoose.Schema({
    courierName: {
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
    courierLogo: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: false,
    },
    startPoint: {
        type: String,
        required: true,
        unique: false,
    },
    endPoint: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('couriers', CourierSchema);