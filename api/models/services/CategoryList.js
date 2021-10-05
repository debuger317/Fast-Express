const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: false,
        trim: true,
    },
    photo: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('category', CategorySchema);
