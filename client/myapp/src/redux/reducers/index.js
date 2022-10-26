import { combineReducers } from "redux";
import auth from "./authreducer";
import product from "./productreducer";
import alertReducer from "./alertreducer";
import cart from "./cartreducer";
import shop from "./shopreducer";
import catageries from "./catageryreducer";
import address from "./addressreducer";
import order from "./orderreducer";
import productimagesreducer from "./productimagesreducer";
export default combineReducers({
  auth: auth,
  products: product,
  alerts: alertReducer,
  cart: cart,
  shop: shop,
  catageries: catageries,
  address: address,
  order: order,
  productimages: productimagesreducer,
});
