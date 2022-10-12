const express = require("express");

const router = express.Router();
const {
  initorder,
  getorderc,
  getsingleorder,
} = require("../Controllers/orderController");
const { auth } = require("../middleware/auth");

router.post("/create-order", auth, initorder);
router.get("/ordersc", auth, getorderc);
router.get("/:id", auth, getsingleorder);

module.exports = router;
