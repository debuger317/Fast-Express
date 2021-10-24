const mongoose = require('mongoose');

const userPaymentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    usermail: { type: String, required: true },
    paymentType: { type: String, required: true },
    paymentAmount: { type: Number, required: true },
    paymentStatus: { type: String, required: true, default: 'pending' },
    cardNumber: { type: Number, required: false },
    cardtype: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model('userPayment', userPaymentSchema);