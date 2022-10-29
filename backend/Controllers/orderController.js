const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
const Shop = require("../models/shopModel");

exports.initorder = async (req, res) => {
  try {
    const { deliverydetails, cartids } = req.body;
    if (!deliverydetails) {
      return res
        .status(400)
        .json({ success: false, message: "Please Select Delivery Address" });
    }
    const promises = [];
    console.log(cartids);
    for (let index = 0; index < cartids.length; index++) {
      const element = cartids[index];
      console.log(element);

      let p = new Promise((resolve, reject) => {
        Cart.findById({ _id: element })
          .populate([
            {
              path: "store",
              model: "Shops",
            },
            {
              path: "cartItems.product",
              // Get friends of friends - populate the 'friends' array for every friend
              populate: { path: "shop" },
            },
          ])
          .exec()
          .then(async (cart) => {
            // console.log(cart);
            const order_ = await new Order({
              to: cart.store.owner,
              from: cart.user,
              ordertotal: cart.carttotal,
              items: [...cart.cartItems],
              deliverydetails: deliverydetails,
            });
            const order = await order_.save();

            resolve(order);
          })

          .catch((err) => console.log(err));
      });
      promises.push(p);
      await Cart.findByIdAndDelete({ _id: element });
    }
    Promise.all(promises)
      .then((p) => console.log(p))
      .catch((err) => console.log(err));
    // console.log(cartids);
    // const cart = await Cart.find({ _id: req.body.cartid }).populate({
    //   path: "cartItems.product",
    //   // Get friends of friends - populate the 'friends' array for every friend
    //   populate: { path: "shop" },
    // });

    // const order_ = new Order({
    //   to: req.user,
    //   from: cart[0].user,
    //   ordertotal: cart[0].carttotal,
    //   items: [...cart[0].cartItems],
    //   deliverydetails: deliverydetails,
    // });
    // const order = await order_.save();

    // await Cart.findByIdAndDelete({ _id: req.body.cartid });
    // return res.json({ order: order_ });
  } catch (error) {
    console.log(error);
  }
};
exports.getorderc = async (req, res) => {
  const order = await Order.find({ from: req.user }).populate("to");
  return res.json({ order: order });
};
exports.getorders = async (req, res) => {
  const order = await Order.find({ to: req.user }).populate("from");
  return res.json({ order: order });
};
exports.getsingleorder = async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id }).populate("to");
  return res.json({ order: order });
};
const helper = (cartid, shopid) => {};
