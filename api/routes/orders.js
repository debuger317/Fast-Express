// all orders including status like pending , active , completed, dislined
// order filter by email address
// order filter by company name and email address
// admin see the all order list 

const router = require("express").Router();
const order_control = require("../controllers/orders")

router.post("/addorder", order_control.Addorder_control)
router.get('/allorder', order_control.allorder_control)
 router.get('/:orderid',  order_control.merchant_order_list_control)
// router.delete('/:email', order_control.allorder_control)

// router.get('/:userid', couriers_Controller.signlecourier_c)

// router.put('/:merchantid', couriers_Controller.updatecourier_c)

module.exports = router;