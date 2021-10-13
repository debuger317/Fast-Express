const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    merchantId: { type: String, required: true },
    merchantinfo: [
        {
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
            _id: false
        }
    ],
    userId: { type: String, required: true },
    userinfo: [

        {
            fname: { type: String, required: true },
            lname: { type: String, required: true },
            address: {
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
            paymentinfo: [
                {
                    paymentType: { type: String, required: true },
                    paymentAmount: { type: Number, required: true },
                    createdAt: { type: Date, required: true },
                    paymentStatus: { type: String, required: true, default: 'pending' },
                    cardNumber: { type: Number, required: false },
                    cardtype: { type: String, required: false },
                     _id: false
                },
               

            ],

            deliverytype: {
                type: String,
                required: true,
                unique: false,
            },
            _id: false
        }
    ],
    parcelinfo: [
        {
            name: {
                type: String,
                required: true,
                unique: false,
            },
            type: {
                type: String,
                required: true,
                unique: false,
            },
            weight: {
                type: Number,
                max: 30,
                min: 1,
                required: true,
                unique: false,
            },
            _id: false
        }
    ]


}, { timestamps: true }, { _id: false });

module.exports = mongoose.model('order', OrderSchema);