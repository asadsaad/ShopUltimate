const mongoose = require("mongoose");

const catageryModel = new mongoose.Schema({
  catagery: {
    type: String,
    require: true,
  },
  subcatagery: [],
  createdat: {
    type: Date,
    default: Date.now,
  },
});

const Catagery = mongoose.model("Catagery", catageryModel);

module.exports = Catagery;
