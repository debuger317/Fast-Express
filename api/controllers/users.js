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
            phone: req.body.phone,

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


const update_user = async (req, res, next) => {
    if (req.body.id === req.params.id) {
        try {
            const updateduser = await Users.findByIdAndUpdate(req.params.id, {
                $set: req.body.name,
                $set: req.body.photo,
                $set: req.body.address,
                $set: req.body.photo,
            })
            res.status(200).json(updateduser)
        }
        catch (err) { res.status(500).json(err) }
    }
    else {
        res.status(401).json("you can only update your account")
    }

}

const deleteduser = async (req, res, next) => {
    try {
        const post = await Users.findById(req.params.id);
            await post.delete();
            res.status(200).json("User has been deleted...");
        }
        catch (err) {
            res.status(500).json(err);
          } 

}

module.exports = {
    adduser,
    allusers,
    update_user,
    deleteduser
}