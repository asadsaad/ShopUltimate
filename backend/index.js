const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const shopRoutes = require("./Routes/shopRoutes");
const AddressRoutes = require("./Routes/DeliveryAddressRoutes");

const catageryRoutes = require("./Routes/catageryRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const brandRoutes = require("./Routes/brandsRoutes");
const profileRoutes = require("./Routes/profileRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/shop", shopRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/catagery", catageryRoutes);
app.use("/address", AddressRoutes);
app.use("/order", orderRoutes);
app.use("/brand", brandRoutes);
app.use("/profile", profileRoutes);

// app.use("/order", orderRoutes);

mongoose
  .connect(
    "mongodb+srv://asadsaad:123ASasd@cluster0.nx9gnlq.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("db connected");
  });

app.listen(5000, function () {
  console.log("app running on 5000");
});
