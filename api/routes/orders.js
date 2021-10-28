// all orders including status like pending , active , completed, dislined
// order filter by email address
// order filter by company name and email address
// admin see the all order list 

const router = require("express").Router();

const order_control = require("../controllers/orders")

router.post("/addorder", order_control.AddANewOrder)

router.get('/allorder', order_control.GetAllOrderList)

router.get('/user/:userId', order_control.findAUserOrderById)

router.get('/merchant/:merchantId', order_control.findAMerchantOrderByIdAndEmail)
router.delete('/:userId', order_control.deleteAUserOrderById)

module.exports = router;