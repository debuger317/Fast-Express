const userPayment = require('../models/UserPaymentInfo');

const NewUserPayment = async (req, res) => {
    try {
        const newPayment = new userPayment({
            userId: req.body.userId,
            usermail: req.body.usermail,
            paymentType: req.body.paymentType,
            paymentAmount: req.body.paymentAmount,
            paymentStatus: req.body.paymentStatus,
            cardNumber: req.body.cardNumber,
            cardtype: req.body.cardtype,
        });
        const payment = await newPayment.save();
        res.status(200).json({
            message: 'your payment has been completed!',
            payment
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

const GetAUserPaymentByEmail = async (req, res, next) => {

    let id = req.params.userId;
    if (req.body.email) {
        try {
            const userpayment = await userPayment.find({ userId: id })
            res.status(200).json(userpayment)
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
    else {
        res.status(401).json("You have no payment details!");
    }
}
module.exports = {
    NewUserPayment,
    GetAUserPaymentByEmail,
}