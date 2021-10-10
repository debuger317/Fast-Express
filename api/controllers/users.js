const Users = require("../models/Users");

const adduser = async (req, res) => {
    try {
        const newUser = new Users({
          usernames: req.body.usernames,
          email: req.body.useremail,
          companymail: req.body.companymail,
          companyname: req.body.companyname,
          companyphoto: req.body.companyphoto,
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