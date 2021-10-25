//user payment information and merchant payment information route here
const router = require("express").Router();

const Payment_controller = require("../controllers/userPaymentInfo")

router.post("/newPayment", Payment_controller.NewUserPayment)
router.get('/:userId', Payment_controller.GetAUserPaymentByEmail)

module.exports = router;
