const router = require ("express").Router();

const admin_controller = require("../controllers/admin");

router.post('/addadmin', admin_controller.addAdmin)
router.get('/all',admin_controller.allAdmin)

module.exports = router;