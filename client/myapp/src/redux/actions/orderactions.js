import {
  CreateOrder,
  OrderActionAttempt,
  OrderActionFailed,
  GET_DASHBOARD_ORDERS,
  GET_USER_ORDERS,
  GET_SINGLE_ORDER,
  UPDATE_ORDER,
  SET_ALERT,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertactions";

export const Createorder =
  (cartids, selected, navigate, paymentid, amount) => async (dispatch) => {
    try {
      console.log(paymentid);
      // const page = 1;
      dispatch({ type: OrderActionAttempt });
      console.log(cartids);
      const res = await axios.post("http://localhost:5000/order/create-order", {
        cartids,
        deliverydetails: selected,
        paymentid: paymentid,
        amount,
      });
      dispatch({
        type: CreateOrder,
        payload: res.data,
      });
      dispatch(
        setAlert(
          "Order Created Sussfully. Visit Order Page To View The Order Status",
          "info"
        )
      );
      navigate("/");
    } catch (error) {
      dispatch(setAlert(error.response.data.message, "error"));
    }
  };
export const getorders_s = () => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: OrderActionAttempt });

    const res = await axios.get("http://localhost:5000/order/orderss");
    console.log(res.data);
    dispatch({
      type: GET_DASHBOARD_ORDERS,
      payload: res.data?.order,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getorders_c = () => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: OrderActionAttempt });

    const res = await axios.get("http://localhost:5000/order/ordersc");
    dispatch({
      type: GET_USER_ORDERS,
      payload: res.data?.order,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getsingleorder = (id) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: OrderActionAttempt });

    const res = await axios.get(`http://localhost:5000/order/${id}`);
    dispatch({
      type: GET_SINGLE_ORDER,
      payload: res.data?.order,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateorder = (formData, id, navigate) => async (dispatch) => {
  try {
    // const page = 1;
    console.log(id);
    dispatch({ type: OrderActionAttempt });
    const res = await axios.put(`http://localhost:5000/order/${id}`, formData);
    console.log(res.data);
    dispatch({
      type: UPDATE_ORDER,
      payload: res.data,
    });
    dispatch(setAlert("Order Created Successfully", "info"));
    navigate("/dashboard/my-orders");
  } catch (error) {
    console.log(error);
  }
};
