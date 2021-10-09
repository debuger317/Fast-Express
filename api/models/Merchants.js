const mongoose = require('mongoose');

const MerchantSchema = new mongoose.Schema({
    courierLogo: {
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
    website: {
        type: String,
        required: true,
        unique: true,
    },
    weight: {
        type: Number,
        max: 30,
        min: 1,
        required: true,
        unique: false,
    },
    address: {
        type: String,
        minlength: 5,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        minlength: 50,
        maxlength: 1500,
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
    serviceCategory: {
        type: [],
        required: true,
        unique: false,
    },
    status: {
        type: String,
        required: true,
        unique: false,
    },
    role: {
        type: String,
        required: true,
        unique: false,
    },
    cutomers: {
        type: [],
        required: false,
        unique: true,
    },
    orders: {
        type: [],
        required: false,
        unique: true,
    },
    report: {
        type: [],
        required: false,
        unique: false,
    }

}, { timestamps: true });

module.exports = mongoose.model('merchants', MerchantSchema);