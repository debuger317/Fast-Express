const Orders = require("../models/Orders");

const Addorder_control = async (req, res) => {
    try {
        const addNew = new Orders({
            merchantId: req.body.merchantId,
            merchantmail: req.body.merchantemail,
            name: req.body.merchantname,
            photo: req.body.merchantphoto,
            address: req.body.merchantaddress,
            userId: req.body.userId,
            fname: req.body.fname,
            lname: req.body.lname,
            address: req.body.useraddress,
            usermail: req.body.useremail,
            pickupFrom: req.body.pickupFrom,
            pickupTo: req.body.pickupTo,
            phone: req.body.phone,
            city: req.body.city,
            zip: req.body.zip,
            paymentType: req.body.paymentType,
            paymentAmount: req.body.paymentAmount,
            createdAt: req.body.createdAt,
            paymentStatus: req.body.paymentStatus,
            cardNumber: req.body.cardNumber,
            cardtype: req.body.cardtype,
            deliverytype: req.body.deliverytype,
            name: req.body.parcelname,
            type: req.body.parceltype,
            weight: req.body.parcelweight,
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

//get order list for user by email id

const email_order_list_control = async (req, res, next) => {
    const id = req.params.userId;
    try {
        const userOrders = await Orders.find({userId:id});
        res.status(200).json(userOrders)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    Addorder_control,
    allorder_control,
    email_order_list_control
}



// {
//     "userId": "der##@4gwagf5",
//     "merchant": [
//         {
//             "merchantId": "iuhwwhjnd$566434",
//             "email": "merchwwwnat@gmail.com",
//             "name": "merhawnxt",
//             "photo": "qqqqwqq",
//             "address": "weuhwajbjhajbjahbahbhj"
//         }
//     ],
//     "username": "Kazwi Rayhan",
//     "useraddress": "Shailkupa,Jhendah",
//     "useremail": "rayhawnbd@gmail.com",
//     "pickupFrom": "Jesswore",
//     "pickupTo": "Dhawka",
//     "deliveryOption": "Homew Delivery",
//     "phone": "+019927w6567",
//     "payment": "Bkaswh"
// }