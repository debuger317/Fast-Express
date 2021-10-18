const Users = require("../models/Users");

const adduser = async (req, res) => {
    try {
        const newUser = new Users({
            photo: req.body.photo,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            address: req.body.address,
            phone: req.body.phone
          
        });
        const newuser = await newUser.save();
        res.status(200).json(newuser);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

//get all merchant list from
const allusers = async (req, res, next) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    adduser,
    allusers
}