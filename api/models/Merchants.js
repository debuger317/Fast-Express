const mongoose = require('mongoose');

const MerchantSchema = new mongoose.Schema({
    logo: {
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
    costperkg: {
        type: Number,
        max: 3000,
        min: 1,
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
        type: Array,
        required: true,
        unique: false,
    },
    status: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('merchants', MerchantSchema);