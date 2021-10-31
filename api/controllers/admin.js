const Admin = require('../models/Admin');

const AddNewAdmin = async (req, res) => {

    const newAdmin = new Admin({
        Id: req.body.Id,
        photo: req.body.photo,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        address: req.body.address,
        phone: req.body.phone,
    })
    const admin = await newAdmin.save();
    res.status(200).json({ message: "admin created successfully", admin })
    res.status(500).json({ message: err.message })
}

const FindAAdmin = async (req, res) => {
    let adminId = req.params.Id;
    try {
        const admin = await Admin.findOne({ Id: adminId })
        res.status(200).json(admin)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    AddNewAdmin,
    FindAAdmin
}