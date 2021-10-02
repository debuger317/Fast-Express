const router = require("express").Router();
const couriers = require("../models/Couriers");

router.post("/addcourier", async (req, res) => {
    try {
        const newCourier = new couriers({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            courierLogo: req.body.courierLogo,
            address: req.body.address,
            phone: req.body.phone,
            location: req.body.location,
            division: req.body.division,
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
})

router.get('/all', async (req, res) => {
    try {
        const allcourier = await couriers.find()
        res.status(200).json(allcourier)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
})

router.put('/:id', async (req, res) => {
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
})

module.exports = router;