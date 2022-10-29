import React, { Component, useEffect } from "react";
import "./App.css";
import Signup from "./components/user/signup";
import Verify from "./components/user/verify";
import { connect } from "react-redux";
import { loadUser } from "./redux/actions/authactions";
import Products from "./components/user/products";
import Addproduct from "./components/product/addproduct";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import PrivateRoute from "./components/user/privetroute";
import setauthtoken from "./redux/setauthtoken";
import Dashboard from "./components/user/dashboard";
import Addshop from "./components/shop/createshop";
import Alert from "./components/layouts/alerts";
import Home from "./components/layouts/home";
import Shops from "./components/shop/shops";
import { getproducts } from "./redux/actions/productactions";
import { getcart } from "./redux/actions/cartactions";
import Cart from "./components/cart/cartsteps";
import CartItemlisting from "./components/cart/cartItemlisting";
import {
  getcatageries,
  getcatagerieslist,
} from "./redux/actions/catageryactions";
import ShopHome from "./components/shop/mainshops";
import ShopView from "./components/shop/shopview";
import ProductView from "./components/product/productview";
import Shipping from "./components/user/shipping";
import Myorders from "./components/order/myorders";
import OrderDetails from "./components/order/OrderDetails";
import Register from "./components/user/signup";
import Login from "./components/user/login";
import Productlisting from "./components/product/allproductslist";
import AddAddress from "./components/userdashboard/AddAddress";
import Support from "./components/userdashboard/support";
import SupportTicket from "./components/userdashboard/supportTicket";
import Whitelist from "./components/userdashboard/whitelist";
import LandingPage from "./components/user/landingPage";
import AddressList from "./components/userdashboard/AddressList";
import CartItemslisting from "./components/cart/cartItemlisting";
import CheckoutandReview from "./components/user/shipping";
import EditProfile from "./components/userdashboard/editProfile";
import { getprofile } from "./redux/actions/profileactions";
if (localStorage.token) {
  setauthtoken(localStorage.token);
}

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
    this.props.getcart();
    this.props.getcatageries();
    this.props.getcatagerieslist();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Alert open={true} />
          <Routes>
            <Route path="test" element={<AddAddress />} />
            <Route path="edit-profile" element={<EditProfile />} />

            <Route path="test1" element={<AddressList />} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Productlisting />} />

            <Route path="/" element={<ShopHome />} />
            <Route path="/verify/:id" element={<Verify />} />
            <Route
              path="/dashboard/*"
              element={<PrivateRoute component={Dashboard} />}
            >
              {/* <Route path="products" element={<Products />} /> */}
              {/* <Route path="shops" element={<Shops />} /> */}
              {/* <Route path="create-shop" element={<Addshop />} /> */}
            </Route>

            <Route path="products" element={<Products />} />
            <Route path="/shop/:id" element={<ShopView />} />
            <Route path="/product/:id" element={<ProductView />} />

            <Route path="shops" element={<Shops />} />
            {/* <Route path="cart" element={<Cart />} /> */}
            <Route path="cartitems" element={<CartItemlisting />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="order/:id" element={<OrderDetails />} />
            <Route path="myorders" element={<Myorders />} />

            <Route
              path="/addproduct"
              element={<PrivateRoute component={Addproduct} />}
            />
            <Route
              path="cart"
              element={<PrivateRoute component={CartItemlisting} />}
            />
            <Route
              path="checkout"
              element={<PrivateRoute component={CheckoutandReview} />}
            />

            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    products: state.products,
    alerts: state.alerts,
  };
};
export default connect(mapStateToProps, {
  loadUser,
  getproducts,
  getcart,
  getcatageries,
  getcatagerieslist,
})(App);
