const { UserDashboard, MerchantDashboard, AdminDashboard } = require("../models/Dashboard");

const useraddItem = async (req, res) => {
    try {
        const additem = new UserDashboard({
            totalorder: req.body.totalorder,
            activeorder: req.body.activeorder,
            completedorder: req.body.completedorder,
            cancelorder: req.body.cancelorder,
            email: req.body.email,
            role: req.body.role,
        });
        const category = await additem.save();
        res.status(200).json(category);

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

const getalluseritems = async (req, res, next) => {
    try {
        const allItem = await UserDashboard.find()
        res.status(200).json(allItem)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    useraddItem,
    getalluseritems
}