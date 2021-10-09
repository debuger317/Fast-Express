const router = require("express").Router();

const auth_control = require("../controllers/userauth");

router.post("/register", auth_control.userRegister);
router.post("/login", auth_control.userLogin);
router.get('/all',auth_control.allauth)

module.exports = router;

