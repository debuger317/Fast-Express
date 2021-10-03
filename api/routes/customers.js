const router = require('express').Router();
const customers = require('../models/customers');

router.post('/register', async (req, res) => {
    try {
        const newCustomer = await new customers({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo,
            label: req.body.label,
        })
        const customer = await newCustomer.save();
        res.status(200).send(customer);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
})

router.get('/all', async (req, res) => {
    try {
        const customer = await customers.find();
        res.status(200).json(customer);
    }
    catch (err) { res.status(500).json(err) }
})

module.exports = router;