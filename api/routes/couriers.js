const router = require("express").Router();
const couriers_Controller = require("../controllers/couriers")

router.post("/addcourier", couriers_Controller.addcourier_C)

router.get('/all', couriers_Controller.getallcourier_C)

router.get('/:id', couriers_Controller.signlecourier_c)

router.put('/:id', couriers_Controller.updatecourier_c)

module.exports = router;