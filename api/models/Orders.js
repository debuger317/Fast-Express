const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    companyphoto: {
        type: String,
        required: true,
    },
    companyname: {
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
    companyemail: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: false,
    },
    address: {
        type: String,
        minlength: 5,
        required: true,
        unique: true,
    },
    pickupFrom: {
        type: String,
        required: true,
        unique: false,
    },
    pickupTo: {
        type: String,
        required: true,
        unique: false,
    },

    deliveryOption: {
        type: String,
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
    payment: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('orders', OrderSchema);