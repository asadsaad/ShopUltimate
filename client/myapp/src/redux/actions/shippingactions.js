import { SET_SHIPPING, GET_SHIPPING, SHIPPING_ACTION_ATTEMPT } from "../types";
import axios from "axios";
import { setAlert } from "./alertactions";

export const addshipping = (formData) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: SHIPPING_ACTION_ATTEMPT });

    const res = await axios.post(
      `http://localhost:5000/shipping/addshipping`,
      formData
    );
    dispatch({
      type: SET_SHIPPING,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getshipping = () => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: SHIPPING_ACTION_ATTEMPT });

    const res = await axios.get(`http://localhost:5000/shipping`);
    console.log(res);
    dispatch({
      type: GET_SHIPPING,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
