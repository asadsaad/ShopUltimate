const express = require("express");

const router = express.Router();
const {
  addcatagery,
  getallcatageries,
} = require("../Controllers/catageryController");
const { auth } = require("../middleware/auth");

router.post("/addcatagery", addcatagery);
router.get("/", getallcatageries);

module.exports = router;
