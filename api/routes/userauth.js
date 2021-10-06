const router = require("express").Router();

const auth_control = require("../controllers/userauth");

router.post("/register", auth_control.userRegister)

