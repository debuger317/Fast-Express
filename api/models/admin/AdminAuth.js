const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: false,
        minlength: 6,
    },
    label: {
        type: String,
        required: true,
        unique: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('admins', AdminSchema);
