const express = require("express");

const router = express.Router();
const {
  initorder,
  getorderc,
  getsingleorder,
  getorders,
} = require("../Controllers/orderController");
const { auth } = require("../middleware/auth");

router.post("/create-order", auth, initorder);
router.get("/ordersc", auth, getorderc);
router.get("/orderss", auth, getorders);

router.get("/:id", auth, getsingleorder);

module.exports = router;
