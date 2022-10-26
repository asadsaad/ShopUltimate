const express = require("express");

const router = express.Router();
const {
  addcatagery,
  getallcatageries,
  getallcatagerieslist,
} = require("../Controllers/catageryController");
const { auth } = require("../middleware/auth");

router.post("/addcatagery", addcatagery);
router.get("/", getallcatageries);
router.get("/list", getallcatagerieslist);

module.exports = router;
