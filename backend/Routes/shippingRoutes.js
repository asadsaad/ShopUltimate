const express = require("express");

const router = express.Router();
const {
  addshipping,
  getshipping,
} = require("../Controllers/shippingController");
const { auth } = require("../middleware/auth");

router.post("/addshipping", auth, addshipping);
router.get("/", auth, getshipping);
// router.post("/add-shop", auth, addshop);
// router.put("/update-shop/:id", auth, updateshop);
// router.delete("/delete-shop/:id", auth, deleteshop);

module.exports = router;
