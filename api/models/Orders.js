const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    merchantId: { type: String, required: true },
    merchantmail: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: false,
    },
    userId: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    address: {
        type: String,
        required: true,
        unique: false,
    },
    usermail: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: false,
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
    phone: {
        type: Number,
        minlength: 11,
        maxlength: 11,
        required: true,
        unique: false
    },
    city: { type: String, required: true },
    zip: { type: String, required: true },

    deliverytype: {
        type: String,
        required: true,
        unique: false,
    },

    p_name: {
        type: String,
        required: true,
        unique: false,
    },
    p_type: {
        type: String,
        required: true,
        unique: false,
    },
    p_weight: {
        type: Number,
        max: 30,
        min: 1,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('order', OrderSchema);