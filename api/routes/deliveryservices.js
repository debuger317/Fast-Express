const router = require("express").Router();
const boy_controller = require("../controllers/deliveryservices")

router.post("/addboy", boy_controller.addboy)

router.get('/allboy', boy_controller.allboy)

module.exports = router;