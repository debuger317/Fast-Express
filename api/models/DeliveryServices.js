const mongoose = require('mongoose');

//model for delivery man add show updated and delete

const DeliveryServiceSchema = new mongoose.Schema({
    
    boy_name: {
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
    email: {
        type: String,
        required: true,
        unique: false,
    },
    phone: {
        type: String,
        required: true,
        unique: false,
    },
    PickupForm: {
        type: String,
        required: true,
        unique: false,
    },
    PickupTo: {
        type: String,
        required: true,
        unique: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('DeliveryService', DeliveryServiceSchema);

