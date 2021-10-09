const Orders = require("../models/Orders");

const Addorder_control = async (req, res) => {
    try {
        const addNew = new Orders({
          username: req.body.username,
          email: req.body.email,
          companyemail: req.body.companyemail,
          companyname: req.body.companyname,
          companyphoto: req.body.companyphoto,
          address: req.body.address,
          pickupFrom: req.body.pickupFrom,
          pickupTo:req.body.pickupTo,
          deliveryOption: req.body.deliveryOption,
          phone: req.body.phone,
          payment: req.body.payment,
        });
        const newOrder = await addNew.save();
        res.status(200).json({
            message: 'your order has been added successfully!',
            newOrder
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

//get all merchant list from

const allorders_control = async (req, res, next) => {
    try {
        const orders = await Orders.find()
        res.status(200).json(orders)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    Addorder_control,
    allorders_control
}