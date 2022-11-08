const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
const Shop = require("../models/shopModel");
const stripe = require("stripe")(
  "sk_test_51IIqvWEeXLQyBq0SFUoiCcsUTvEVJnKtW14RDPeyzoHamL7Tp5azMXpTmuy1qwxbVeF1Mn6qXkNgLxs8IBKLAAI400QZmA3RJ6"
);

exports.initorder = async (req, res) => {
   const { deliverydetails, cartids,paymentid } = req.body;
    // if (!deliverydetails) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Please Select Delivery Address" });
    // }
    // if (!paymentid) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Please Enter Payment Info" });
    // }
  try {
    console.log(paymentid)
   const payment = await stripe.paymentIntents.create({
    amount:"1000",
    currency:"USD",
    description:"Payment",
    payment_method:paymentid,
    confirm:true,
    application_fee_amount:"10",
    transfer_data:{
      destination:"acct_1M14Y7IezsOPpiu9"
    }

  })

// {
//   stripeAccount: 'acct_1M14Y7IezsOPpiu9',

// }
    console.log(payment)
    // const promises = [];
    // console.log(cartids);
    // for (let index = 0; index < cartids.length; index++) {
    //   const element = cartids[index];
    //   console.log(element);

    //   let p = new Promise((resolve, reject) => {
    //     Cart.findById({ _id: element })
    //       .populate([
    //         {
    //           path: "store",
    //           model: "Shops",
    //         },
    //         {
    //           path: "cartItems.product",
    //           // Get friends of friends - populate the 'friends' array for every friend
    //           populate: { path: "shop" },
    //         },
    //       ])
    //       .exec()
    //       .then(async (cart) => {
    //         // console.log(cart);
    //         const order_ = await new Order({
    //           to: cart.store.owner,
    //           from: cart.user,
    //           ordertotal: cart.carttotal,
    //           items: [...cart.cartItems],
    //           deliverydetails: deliverydetails,
    //         });
    //         const order = await order_.save();

    //         resolve(order);
    //       })

    //       .catch((err) => console.log(err));
    //   });
    //   promises.push(p);
    //   await Cart.findByIdAndDelete({ _id: element });
    // }
    // Promise.all(promises)
    //   .then((p) => console.log(p))
    //   .catch((err) => console.log(err));

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
const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};
exports.payment = async (req, res) => {
  try {
    const { items } = req.body;
    console.log("pay");

    // Create a PaymentIntent with the order amount and currency
   
res.send(paymentIntent)
  } catch (error) {
    console.log(error);
  }
};

exports.sconnect = async(req,res)=>{
// const account = await stripe.accounts.create({type: 'express'});
// const accountLink = await stripe.accountLinks.create({
//   account: account.id,
//   refresh_url: 'https://example.com/reauth',
//   return_url: 'https://example.com/return',
//   type: 'account_onboarding',
// });
//  const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1000,
//   currency: 'usd',
//   application_fee_amount: 123,
//   payment_method:["card"],
//   confirm:true
// }, {
//   stripeAccount: 'acct_1M14Y7IezsOPpiu9',

// });
// return res.json({paymentIntent})

}