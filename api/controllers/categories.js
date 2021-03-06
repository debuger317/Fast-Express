const categories = require("../models/Categories");

const addcategory_C = async (req, res) => {
    try {
        const newCategory = new categories({
            name: req.body.name,
            photo: req.body.photo,
        });
        const category = await newCategory.save();
        res.status(200).json({ success: 'category added successfully!', category });

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
            res.status(200).json({ success: 'Category has been updated', updatedcategory })
        }
        catch (err) { res.status(500).json(err) }
    }
    else {
        res.status(401).json({ error: 'category can update a admin' })
    }

}

//delete a category

const deletedcategory = async (req, res, next) => {
    try {
        const post = await categories.findById(req.params.id);
        await post.delete();
        res.status(200).json({ success: "Category has been deleted!" });
    }
    catch (err) {
        res.status(500).json(err);
    }

}

module.exports = {
    addcategory_C,
    getallcategory_C,
    updatecategory_c,
    deletedcategory
}
