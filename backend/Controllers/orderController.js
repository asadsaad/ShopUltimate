const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
const Shop = require("../models/shopModel");

exports.initorder = async (req, res) => {
  const cart = await Cart.find({ _id: req.body.cartid }).populate({
    path: "cartItems.product",
    // Get friends of friends - populate the 'friends' array for every friend
    populate: { path: "shop" },
  });
  const order_ = new Order({
    to: req.user,
    from: cart[0].user,
    ordertotal: cart[0].carttotal,
    items: [...cart[0].cartItems],
  });
  const order = await order_.save();

  await Cart.findByIdAndDelete({ _id: req.body.cartid });
  return res.json({ order: order });
};
exports.getorderc = async (req, res) => {
  const order = await Order.find({ from: req.user }).populate("to");
  return res.json({ order: order });
};
exports.getsingleorder = async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id }).populate("to");
  return res.json({ order: order });
};
const helper = (cartid, shopid) => {};
