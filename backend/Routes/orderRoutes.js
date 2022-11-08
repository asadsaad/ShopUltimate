const express = require("express");

const router = express.Router();
const {
  initorder,
  getorderc,
  getsingleorder,
  getorders,
  payment,
  sconnect,
} = require("../Controllers/orderController");
const { auth } = require("../middleware/auth");

router.post("/create-order", auth, initorder);
router.get("/ordersc", auth, getorderc);
router.get("/orderss", auth, getorders);
router.post("/payment", payment);
router.get("/", sconnect);


router.get("/:id", auth, getsingleorder);

module.exports = router;
