const router = require("express").Router();
const review_control = require("../controllers/review");

router.post("/addreview", review_control.addreview);
router.get("/allreviews", review_control.allreviews);
router.delete("/:id", review_control.deletereview);

module.exports = router;