const router = require('express').Router();
const users = require('../models/Users');

router.post('/register', async (req, res) => {
    try {
        const newUser = await new users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo,
            label: req.body.label,
        })
        const user = await newUser.save();
        res.status(200).send(user);
    }
    catch (err) { res.status(500).json(err) }
})

router.get('/all', async (req, res) => {
    try {
        const user = await users.find();
        res.status(200).json(user);
    }
    catch (err) { res.status(500).json(err) }
})

module.exports = router;