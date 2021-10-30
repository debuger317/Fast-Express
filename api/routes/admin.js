const adminController = require('../controllers/admin');

const router = require("express").Router();

router.post('/addnew', adminController.AddNewAdmin);
router.get('/:Id', adminController.FindAAdmin);

module.exports = router;