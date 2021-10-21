// admin see the all categories and manage add new categories on the admin dashboard
// all categories list are visible on the frontend

const router = require("express").Router();
const category_Controller = require("../controllers/categories")

router.post("/addcategory", category_Controller.addcategory_C)

router.get('/all', category_Controller.getallcategory_C)

router.put('/:id', category_Controller.updatecategory_c)

router.delete('/:id', category_Controller.deletedcategory)


module.exports = router;