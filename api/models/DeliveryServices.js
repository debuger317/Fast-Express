const mongoose = require('mongoose');

//model for delivery man add show updated and delete

const DeliveryServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    photo: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('DeliveryService', DeliveryServiceSchema);

