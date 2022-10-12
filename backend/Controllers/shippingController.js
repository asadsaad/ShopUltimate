const Shipping = require("../models/shippingModel");

exports.addshipping = async (req, res) => {
  try {
    const user = req.user;
    const shipping = await Shipping.findOne({ user: req.user });
    if (shipping) {
      const { email, phone, country, city, postalcode, streetaddress } =
        req.body;
      const shippingdata = await Shipping.findOneAndUpdate(
        { user: user },
        { email, phone, country, city, postalcode, streetaddress },
        { new: true }
      );
      const data = await shippingdata.save();
      return res.status(200).json({
        success: true,
        data: data,
        message: "Shipping Updated Successfully",
      });
    }
    const { email, phone, country, city, postalcode, streetaddress } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email Name is Required" });
    }
    if (!phone) {
      return res
        .status(400)
        .json({ success: false, message: "Phone is Required" });
    }
    if (!country) {
      return res
        .status(400)
        .json({ success: false, message: "Country is Required" });
    }
    if (!city) {
      return res
        .status(400)
        .json({ success: false, message: "City is Required" });
    }
    if (!postalcode) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Postal Code" });
    }
    if (!streetaddress) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter Street Address" });
    }
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Attempt" });
    }
    const shippingdata = await new Shipping({
      user: req.user,
      email,
      phone,
      country,
      city,
      postalcode,
      streetaddress,
    });
    const data = await shippingdata.save();
    return res
      .status(200)
      .json({ success: true, data, message: "Shipping Added Successfully" });
  } catch (error) {
    console.log(error);
  }
};
exports.getshipping = async (req, res) => {
  const user = req.user;
  const shipping = await Shipping.findOne({ user: req.user });
  console.log(shipping);
  if (shipping) {
    return res.status(200).json({ success: true, data: shipping });
  }
  return res.status(400).json({ success: false, message: "Invalid Attempt" });
};
