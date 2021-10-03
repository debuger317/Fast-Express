const router = require('express').Router();
const customers_c = require('../controllers/customers');

router.post('/register',customers_c.customer_add_c)

router.get('/all',customers_c.getallcustomer_C)

module.exports = router;