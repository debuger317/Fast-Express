// all orders including status like pending , active , completed, dislined
// order filter by email address
// order filter by company name and email address
// admin see the all order list 

const router = require("express").Router();
const order_control = require("../controllers/orders")

router.post("/addorder", order_control.Addorder_control)

router.get('/allorder', order_control.allorders_control)

// router.get('/:id', couriers_Controller.signlecourier_c)

// router.put('/:id', couriers_Controller.updatecourier_c)

module.exports = router;