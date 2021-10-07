const AllCustomer = require("../models/customer/AllCustomer");
const bcrypt = require('bcrypt');

// Register

const userRegister = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new AllCustomer({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
};

// Login

const userLogin = async (req, res) =>{
    try{
        const user = await AllCustomer.findOne({ name: req.body.name});
        !user && res.status(400).json("Wrong Credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Credentials!");

        const {password, ...others}=user._doc;
        res.status(200).json(others);
    } catch(err){
        res.status(500).json(err);
    }
}

const allauth = async (req, res) => {
    try {
        const user = await AllCustomer.find();
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    userRegister,
    userLogin,
    allauth
}