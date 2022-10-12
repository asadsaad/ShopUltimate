import {
  CreateOrder,
  OrderActionAttempt,
  OrderActionFailed,
  GET_DASHBOARD_ORDERS,
  GET_USER_ORDERS,
  GET_SINGLE_ORDER,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertactions";

export const Createorder = (cartid, navigate) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: OrderActionAttempt });

    const res = await axios.post("http://localhost:5000/order/create-order", {
      cartid,
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
    console.log(error);
  }
};
export const getorders_s = () => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: OrderActionAttempt });

    const res = await axios.get("http://localhost:5000/order/ordersc");
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
