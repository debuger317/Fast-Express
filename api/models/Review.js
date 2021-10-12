const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: false
    },
    city: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    photo: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('review', ReviewSchema);