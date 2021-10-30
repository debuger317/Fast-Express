const Orders = require("../models/Orders");

const AddANewOrder = async (req, res) => {
    try {
        const addNew = new Orders({

            merchantId: req.body.merchantId,
            merchantmail: req.body.merchantmail,
            merchantName: req.body.merchantName,
            userId: req.body.userId,
            fname: req.body.fname,
            lname: req.body.lname,
            address: req.body.address,
            usermail: req.body.usermail,
            pickupFrom: req.body.pickupFrom,
            pickupTo: req.body.pickupTo,
            phone: req.body.phone,
            orderStatus: req.body.orderStatus,
            city: req.body.city,
            zip: req.body.zip,
            deliverytype: req.body.deliverytype,
            p_name: req.body.parcelname,
            p_photo: req.body.parcelphoto,
            p_type: req.body.parceltype,
            p_weight: req.body.parcelweight,
        });
        const newOrder = await addNew.save();
        res.status(200).json({
            success: 'your order has been added successfully!',
            newOrder
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}


//get all order list from order list

const GetAllOrderList = async (req, res, next) => {
    try {
        const orders = await Orders.find()
        res.status(200).json(orders)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

//get order list for merchant by merchant id

const findAMerchantOrderByIdAndEmail = async (req, res, next) => {

    let id = req.params.merchantId;

        try {    
            const orders = await Orders.find({ merchantId: id });
            res.status(200).json(orders)
        }
        catch (err) {

            res.status(500).json({ message: err.message })
        }
    }


//get order list for user by email id

const findAUserOrderById = async (req, res, next) => {
    let id = req.params.userId;
        try {
            const userOrders = await Orders.find({ userId: id });
            res.status(200).json({ message:'We are not any order for you. Please take a order',userOrders})
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ message: err.message })
        }
    }


// cancel or delete or remove a user order by Id and Email
const deleteAUserOrderById = async (req, res, next) => {

    try {
        const order = await Orders.findById(req.params.id);
        if (Orders.usermail === req.body.email) {
          try {
            await order.delete();
            res.status(200).json({ success:"order has been deleted..."});
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json({ error:"You can delete only your order!"});
        }
      } catch (err) {
        res.status(500).json(err);
      }
    }


module.exports = {
    AddANewOrder,
    GetAllOrderList,
    findAUserOrderById,
    deleteAUserOrderById,
    findAMerchantOrderByIdAndEmail
}
