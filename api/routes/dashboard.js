//user total order , ative, pending, dislined
//merchant total order , total sell, total customer, dislined
//admin total sell , total user, total company, total page view

const router = require("express").Router();
const dashboard_controller = require("../controllers/dashboard")

router.post("/adduserdashboard", dashboard_controller.useraddItem)

router.get('/alluserDashboard', dashboard_controller.getalluseritems)

module.exports = router;
