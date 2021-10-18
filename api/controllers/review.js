const Review = require("../models/Review");

const addreview = async (req, res) => {
    try {
        const newReview = new Review({
            name: req.body.name,
            city: req.body.city,
            description: req.body.description,
            photo: req.body.photo,
        });
        const newreview = await newReview.save();
        res.status(200).json(newreview);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

//get all merchant list from
const allreviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.status(200).json(reviews)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    addreview,
    allreviews
}