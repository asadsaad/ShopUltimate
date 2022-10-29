import {
  DELETE_PROFILE,
  GET_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ACTION_ATTEMPT,
  PROFILE_ACTION_SUCCESS,
  PROFILE_ACTION_FAILED,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertactions";

export const getprofile = () => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: PROFILE_ACTION_ATTEMPT });

    const res = await axios.get(`http://localhost:5000/profile`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteprofile = (id) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: PROFILE_ACTION_ATTEMPT });

    const res = await axios.delete(`http://localhost:5000/profile/${id}`);
    console.log(res);
    dispatch({
      type: DELETE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Brand Delete Successfully", "success"));
  } catch (error) {
    console.log(error);
  }
};

export const updateprofile = (formData, navigate) => async (dispatch) => {
  try {
    // const page = 1;
    dispatch({ type: PROFILE_ACTION_ATTEMPT });

    const res = await axios.put(`http://localhost:5000/profile`, formData);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Brand Updated Successfully", "success"));
    // open(false);
  } catch (error) {
    console.log(error);
  }
};
