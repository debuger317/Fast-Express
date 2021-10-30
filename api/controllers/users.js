const Users = require("../models/Users");

const adduser = async (req, res) => {
    try {
        const newUser = new Users({
            Id: req.body.Id,
            photo: req.body.photo,
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            status: req.body.status,
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

//get a user list item
const FindAUserById = async (req, res, next) => {
    let userId = req.params.Id;
    try {
        const user = await Users.findOne({ Id: userId })
        res.status(200).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}


const update_user = async (req, res, next) => {

    let userId = req.params.Id;

    let upadatedUser = {
        name: req.body.name,
        photo: req.body.photo,
        address: req.body.address,
    }

    try {
        const updateduser = await Users.findOneAndUpdate({ Id: userId }, {
            $set: upadatedUser
        })
        res.status(200).json({ success: 'account hasbeen updated successfully!', updateduser })
    }
    catch (err) { res.status(500).json(err) }
}

const deleteduser = async (req, res, next) => {
    let id = req.params.id
    try {
        const user = await Users.findOneAndDelete({ Id: id });
        await user.delete();
        res.status(200).json({ success: "Account has been deleted" });
    }
    catch (err) {
        res.status(500).json(err);
    }

}
//    UpdateDeletedUserStatus

const UpdateDeletedUserStatus = async (req, res, next) => {

    let userId = req.params.Id

    let upadtedstatus = {
        status: req.body.status
    }

    try {
        const updateduser = await Users.findOneAndUpdate({ Id: userId },

            { $set: upadtedstatus }

            , { timestamps: false }
        )
        res.status(200).json({ success: 'account hasbeen updated successfully!', updateduser })
    }
    catch (err) {
        res.status(500).json(err)
        console.log(err);
    }
}

module.exports = {
    adduser,
    allusers,
    FindAUserById,
    update_user,
    deleteduser,
    UpdateDeletedUserStatus
}