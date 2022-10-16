import {
  CREATE_SHOP,
  GET_ALL_SHOPS,
  GET_USER_SHOPS,
  GET_ERROR,
  IN_PROGRESS,
  DELETE_SHOP,
  UPDATE_SHOP,
  SHOP_ACTION_ATTEMPT,
  SHOP_ACTION_SUCCESS,
  SHOP_ACTION_FAILED,
  GET_SINGLE_SHOP,
} from "../types";

import axios from "axios";
import { setAlert } from "./alertactions";

export const getallshops = (page) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/shop?page=${page}`);
    // console.log(res.data.data)
    dispatch({
      type: GET_ALL_SHOPS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const getusershops = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/shop/usershops`);
    // console.log(res.data.data)
    dispatch({ type: SHOP_ACTION_ATTEMPT });
    dispatch({
      type: GET_USER_SHOPS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const getsingleshop = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/shop/${id}`);
    // console.log(res.data.data)
    dispatch({
      type: GET_SINGLE_SHOP,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addshop = (formdata, setshopaddopen) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/shop/add-shop",
      formdata
    );
    console.log(res.data);
    dispatch({
      type: CREATE_SHOP,
      payload: res.data,
    });
    dispatch({
      type: SHOP_ACTION_SUCCESS,
    });
    dispatch(setAlert(res.data.message, "success"));
    setshopaddopen(false);
  } catch (err) {
    dispatch({
      type: SHOP_ACTION_FAILED,
    });
    dispatch(setAlert(err.response.data.message, "error"));
  }
};

export const updateshop = (shop, setopen) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/shop/update-shop/${shop._id}`,
      shop
    );
    dispatch({
      type: SHOP_ACTION_ATTEMPT,
    });
    dispatch({
      type: UPDATE_SHOP,
      payload: res.data,
    });
    dispatch({
      type: SHOP_ACTION_SUCCESS,
    });

    dispatch(setAlert("Shop Updated Successfully", "success"));
    setopen(false);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteshop = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/shop/delete-shop/${id}`
    );
    dispatch({
      type: SHOP_ACTION_ATTEMPT,
    });
    console.log(res);
    dispatch({
      type: DELETE_SHOP,
      payload: id,
    });
    dispatch({
      type: SHOP_ACTION_SUCCESS,
    });
    dispatch(setAlert("Shop Deleted!", "success"));
  } catch (error) {
    console.log(error.message);
  }
};

// export const setCurrent = log => {
//     return {
//       type: SET_CURRENT,
//       payload: log
//     };
//   };

//   // Clear current log
//   export const clearCurrent = () => {
//     return {
//       type: CLEAR_CURRENT
//     };
//   };
