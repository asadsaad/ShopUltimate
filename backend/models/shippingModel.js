const mongoose = require("mongoose");

const shipping = mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, require: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  postalcode: { type: Number, required: true },
  streetaddress: { type: String, required: true },
});

const Shipping = mongoose.model("Shipping", shipping);

module.exports = Shipping;
