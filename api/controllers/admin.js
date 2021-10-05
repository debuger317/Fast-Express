const admins = require("../models/admin/AdminAuth");

// add admin route 
const addAdmin = async (req, res) => {
    try {
        const newAdmin = new admins({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            label: req.body.label,
        })
        const admin = await newAdmin.save();
        res.status(200).json(admin);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

// get all admins 

const allAdmin = async (req, res) => {
    try {
        const admin = await admins.find();
        res.status(200).json(admin);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    addAdmin,
    allAdmin
}