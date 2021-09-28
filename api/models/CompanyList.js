const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    companylogo: {
        type: String,
        default: "",
        unique: true,
    },
    address: {
        type: String,
        required: true,
        unique: true,
    },
    startpoint: {
        type: String,
        required: true,
        unique: false,
    },
    endpoint: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

module.exports = mongoose.model('company', CompanySchema);