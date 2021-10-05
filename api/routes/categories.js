const router = require("express").Router();
const category_Controller = require("../controllers/category")

router.post("/addcategory", category_Controller.addcategory_C)

router.get('/all', category_Controller.getallcategory_C)

router.put('/:id', category_Controller.updatecategory_c)

module.exports = router;