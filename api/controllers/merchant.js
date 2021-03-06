const merchants = require("../models/Merchants");

const addmerchant_C = async (req, res) => {
    try {
        const newmerchant = new merchants({
            logo: req.body.logo,
            name: req.body.companyName,
            email: req.body.email,
            merchantId: req.body.merchantId,
            website: req.body.website,
            weight: req.body.weight,
            address: req.body.address,
            description: req.body.description,
            pickupFrom: req.body.pickupFrom,
            pickupTo: req.body.pickupTo,
            costperkg: req.body.costperkg,
            deliveryOption: req.body.deliveryOption,
            phone: req.body.phone,
            serviceCategory: req.body.serviceCategory,
            status: req.body.status
        });
        const merchant = await newmerchant.save();
        res.status(200).json({ success: 'a new merchant account created successfully!', merchant });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

//get all merchant list from

const getallmerchant_C = async (req, res, next) => {
    try {
        const allmerchant = await merchants.find()
        res.status(200).json(allmerchant)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

//find a single merchant item by merchantId

const signlemerchant_c = async (req, res, next) => {
    let merchantId = req.params.id;
    try {
        const merchantItem = await merchants.findById(merchantId);
        res.status(200).json(merchantItem)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}
// find a single merchant by email address
const FindAMerchantByEmail = async (req, res, next) => {

    let Id = req.params.merchantId;

    try {
        const merchant = await merchants.find({ merchantId:Id });
        res.status(200).json(merchant)
    }
    catch (err) {

        res.status(500).json({ message: err.message })
    }
}

//update any field from merchants

const updatemerchant_c = async (req, res, next) => {
    if (req.body.merchantId === req.params.id) {
        try {
            const updatedmerchant = await merchants.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json(updatedmerchant)
        }
        catch (err) { res.status(500).json(err) }
    }
    else {
        res.status(401).json("you only update your company list")
    }

}

// delete a merchant account by id and email address

const deleteAMerchantByIdAndEmail = async (req, res, next) => {

    if (req.body.merchantEmail === merchants.email) {
        try {
            const post = await Orders.findById(req.params.id);
            await post.delete();
            res.status(200).json("Order has been deleted...");
        }

        catch (err) {
            res.status(500).json(err);
        }
    }

    else {
        res.status(401).json("you only delete your company")
    }

}

module.exports = {
    addmerchant_C,
    getallmerchant_C,
    signlemerchant_c,
    FindAMerchantByEmail,
    updatemerchant_c,
    deleteAMerchantByIdAndEmail
}