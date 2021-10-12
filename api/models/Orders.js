const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: String },
    merchant: [
        {
            merchantId: {
                type: String,
                required: true,
                unique: false,
            },
            email: {
                type: String,
                required: true,
                unique: false,
            },
            name: {
                type: String,
                required: true,
                unique: false,
            },
            photo: {
                type: String,
                required: true,
                unique: false,
            },
            address: {
                type: String,
                required: true,
                unique: false,
            },

        },
        { _id: false },
    ],
    username: {
        type: String,
        required: true,
    },
    useraddress: {
        type: String,
        required: true,
        unique: false,
    },
    useremail: {
        type: String,
        lowercase: true,
        trim: true,
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

}, { timestamps: true }, { _id: false });

module.exports = mongoose.model('order', OrderSchema);