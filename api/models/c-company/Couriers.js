const mongoose = require('mongoose');

const CourierSchema = new mongoose.Schema({
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
    companylogo: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
        unique: true,
    },
    division: {
        type: String,
        required: true,
        unique: false,
    },
    startpoint: {
        type: String,
        required: true,
        unique: false,
    },
    endpoint: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('couriers', CourierSchema);