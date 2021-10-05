const categories = require("../models/services/CategoryList");

const addcategory_C = async (req, res) => {
    try {
        const newCategory = new categories({
            name: req.body.name,
            photo: req.body.photo,
        });
        const category = await newCategory.save();
        res.status(200).json(category);

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

//get all category list from

const getallcategory_C = async (req, res, next) => {
    try {
        const allcategory = await categories.find()
        res.status(200).json(allcategory)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

//update any field from categories

const updatecategory_c = async (req, res, next) => {
    if (req.body.categoryId === req.params.id) {
        try {
            const updatedcategory = await categories.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json(updatedcategory)
        }
        catch (err) { res.status(500).json(err) }
    }
    else {
        res.status(401).json("you only update your company list")
    }

}

module.exports = {
    addcategory_C,
    getallcategory_C,
    updatecategory_c
}