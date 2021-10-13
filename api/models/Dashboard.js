const mongoose = require('mongoose');

const UserDashboard = new mongoose.Schema({

    totalorder: {
        type: Number,
        required: false,
        default: 0,
    },
    activeorder: {
        type: Number,
        required: false,
        default: 0,
    },
    completedorder: {
        type: Number,
        required: false,
        default: 0,
    },
    cancelorder: {
        type: Number,
        required: false,
        default: 0,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
    },

    role: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

const MerchantDashboard = new mongoose.Schema({

    totalorder: {
        type: Number,
        required: false,
        default: 0,
    },
    totalsell: {
        type: Number,
        required: false,
        default: 0,
    },
    totalcustomer: {
        type: Number,
        required: false,
        default: 0,
    },
    totalcompany: {
        type: Number,
        required: false,
        default: 0,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });

const AdminDashboard = new mongoose.Schema({

    totalorder: {
        type: Number,
        required: false,
        default: 0,
    },
    totalsell: {
        type: Number,
        required: false,
        default: 0,
    },
    totaluser: {
        type: Number,
        required: false,
        default: 0,
    },
    totalcompany: {
        type: Number,
        required: false,
        default: 0,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
    },

    role: {
        type: String,
        required: true,
        unique: false,
    },

}, { timestamps: true });


const Userdashboard=  mongoose.model("usersdashboard", UserDashboard);
const Merchantdashboard= mongoose.model("merchantsdashboard", MerchantDashboard);
const Admindashboard=  mongoose.model("admindashboard", AdminDashboard);

module.exports = {
    UserDashboard: Userdashboard,
    MerchantDashboard: Merchantdashboard,
    AdminDashboard: Admindashboard
  }
  