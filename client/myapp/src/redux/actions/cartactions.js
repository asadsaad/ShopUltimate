import {
  GET_USER_CART,
  ADD_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CART_QUANTITY_INCREAMENT,
  CART_QUANTITY_DECREAMENT,
} from "../types";
import axios from "axios";
import store from "../store";
import { setAlert } from "./alertactions";
export const getcart = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/cart");
    // console.log(res.data.data)

    dispatch({
      type: GET_USER_CART,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addtocart = (id, shopid) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/cart/additemtocart/${id}`
    );

    dispatch({
      type: ADD_TO_CART,
      payload: {
        id: id,
        product: res.data.product,
        carttotal: res.data.data,
        shopid: shopid,
        cart: res.data.data,
      },
    });
    dispatch(setAlert(res.data.message, "success"));
  } catch (error) {
    console.log(error);
  }
};
export const removefromcart = (id, cartid, storeid) => async (dispatch) => {
  try {
    console.log(cartid);
    const res = await axios.post(
      `http://localhost:5000/cart/removeitemfromcart/${id}`,
      { storeid }
    );
    dispatch(setAlert(res.data.message, "success"));

    console.log(res.data);

    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: { id, cartid, data: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};
export const cartitemincreament = (id, cartid, storeid) => async (dispatch) => {
  try {
    console.log("delete");
    const res = await axios.post(
      `http://localhost:5000/cart/cartitemincreament/${id}`,
      { storeid }
    );
    dispatch(setAlert(res.data.message, "success"));
    console.log(res.data);

    dispatch({
      type: CART_QUANTITY_INCREAMENT,
      payload: { id: id, data: res.data, cartid: cartid },
    });
  } catch (error) {
    console.log(error);
  }
};
export const cartitemdecreament = (id, cartid, storeid) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/cart/cartitemdecreament/${id}`,
      { storeid }
    );
    dispatch(setAlert(res.data.message, "success"));
    console.log(res.data);

    dispatch({
      type: CART_QUANTITY_DECREAMENT,
      payload: { id: id, cartid: cartid, data: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};
