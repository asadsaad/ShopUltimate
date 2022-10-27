import { GET_CATAGERY, ADD_CATAGERY, GET_CATAGERY_LIST } from "../types";
import axios from "axios";
import { setAlert } from "./alertactions";

export const getcatageries = () => async (dispatch) => {
  try {
    // const page = 1;
    // dispatch({ type: PRODUCT_ACTION_ATTEMPT });

    const res = await axios.get(`http://localhost:5000/catagery`);
    dispatch({
      type: GET_CATAGERY,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getcatagerieslist = () => async (dispatch) => {
  try {
    // const page = 1;
    // dispatch({ type: PRODUCT_ACTION_ATTEMPT });

    const res = await axios.get(`http://localhost:5000/catagery/list`);
    dispatch({
      type: GET_CATAGERY_LIST,
      payload: res.data.categoryList,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addcatagery = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/catagery/addcatagery",
      formData
    );
    console.log(res.data);
    dispatch({
      type: ADD_CATAGERY,
      payload: res.data,
    });
    dispatch(setAlert(res.data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error.response.data.message, "error"));
  }
};
