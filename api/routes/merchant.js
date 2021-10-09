//merchant total order , total sell, total customer, dislined
// add new category
// update their information
// see order list ony their companys
// see only their customers 
// admin see the all merchant list

const router = require("express").Router();
const merchant_control = require("../controllers/merchant")

router.post("/addcourier", merchant_control.addmerchant_C)

router.get('/all', merchant_control.getallmerchant_C)

router.get('/:id', merchant_control.signlemerchant_c)

router.put('/:id', merchant_control.updatemerchant_c)

module.exports = router;