const Orders = require("../models/Orders");

const Addorder_control = async (req, res) => {
    try {
        const addNew = new Orders({
            userId: req.body.userId,
            merchant: [
                {
                    merchantId: req.body.merchantId,
                    email: req.body.email,
                    name: req.body.name,
                    photo: req.body.photo,
                    address: req.body.address,
       
                },
            ],
            username: req.body.username,
            useraddress: req.body.useraddress,
            useremail: req.body.useremail,
            pickupFrom: req.body.pickupFrom,
            pickupTo: req.body.pickupTo,
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

//get all order list from for admin

const allorder_control = async (req, res, next) => {
    try {
        const orders = await Orders.find()
        res.status(200).json(orders)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

//get order list for user by username id

const user_order_list_control = async (req, res, next) => {
    try {
        const orders = await Orders.find()
        res.status(200).json(orders)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

//get order list for merchant by username id

const merchant_order_list_control = async (req, res, next) => {
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
    allorder_control
}



/*{
    "userId": "der##@4gwagf5",
    "merchant": [
        {
            "merchantId": "iuhwwhjnd$566434",
            "email": "merchwwwnat@gmail.com",
            "name": "merhawnxt",
            "photo": "qqqqwqq",
            "address": "weuhwajbjhajbjahbahbhj"
        }
    ],
    "username": "Kazwi Rayhan",
    "useraddress": "Shailkupa,Jhendah",
    "useremail": "rayhawnbd@gmail.com",
    "pickupFrom": "Jesswore",
    "pickupTo": "Dhawka",
    "deliveryOption": "Homew Delivery",
    "phone": "+019927w6567",
    "payment": "Bkaswh"
}*/