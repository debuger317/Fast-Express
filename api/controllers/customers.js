const customers = require('../models/customer/AllCustomer');

const customer_add_c = async (req, res) => {

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
}

//get all customers list from

const getallcustomer_C = async (req, res) => {
    try {
        const customer = await customers.find();
        res.status(200).json(customer);
    }
    catch (err) { res.status(500).json(err) }
}

module.exports = {
    customer_add_c,
    getallcustomer_C
}