const couriers = require("../models/Couriers");

const addcourier_C = async (req, res) => {
    try {
        const newCourier = new couriers({
            name: req.body.name,
            email: req.body.email,
            companylogo: req.body.companylogo,
            address: req.body.address,
            startpoint: req.body.startpoint,
            endpoint: req.body.endpoint
        });
        const courier = await newCourier.save();
        res.status(200).json(courier);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

//get all courier list from

const getallcourier_C = async (req, res, next) => {
    try {
        const allcourier = await couriers.find()
        res.status(200).json(allcourier)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

//find a single courier item by courierId

const signlecourier_c = async (req, res, next) => {
    let courierId = req.params.id;
    try {
        const courierItem = await couriers.findById(courierId);
        res.status(200).json(courierItem)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

//update any field from couriers

const updatecourier_c = async (req, res, next) => {
    if (req.body.courierId === req.params.id) {
        try {
            const updatedcourier = await couriers.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json(updatedcourier)
        }
        catch (err) { res.status(500).json(err) }
    }
    else {
        res.status(401).json("you only update your company list")
    }

}

module.exports = {
    addcourier_C,
    getallcourier_C,
    signlecourier_c,
    updatecourier_c
}