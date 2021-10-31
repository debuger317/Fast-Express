const deliveryBoy = require('../models/DeliveryServices');

const addboy = async (req, res) => {
    try {
        const newBoy = new deliveryBoy({
            boy_name: req.body.boy_name,
            photo: req.body.photo,
            email: req.body.email,
            phone: req.body.phone,
            PickupForm: req.body.PickupForm,
            PickupTo: req.body.PickupTo
        })
        const boy = await newBoy.save();
        res.status(200).json(boy);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const allboy = async (req, res, next) => {
    try {
        const findAll = await deliveryBoy.find();
        res.status(200).json(findAll);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    addboy,
    allboy
}