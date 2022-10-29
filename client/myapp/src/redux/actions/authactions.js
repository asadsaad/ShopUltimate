import axios from "axios";
import setauthtoken from "../setauthtoken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_ERROR,
  IN_PROGRESS,
  REMOVE_ALERT,
  VERIFY_EMAIL,
  PASSWORD_CHANGE,
} from "../types";
import { setAlert } from "./alertactions";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setauthtoken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:5000/user");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    dispatch({
      type: IN_PROGRESS,
      payload: false,
    });
  } catch (err) {
    localStorage.removeItem("token");

    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
    dispatch({
      type: IN_PROGRESS,
      payload: false,
    });
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/user/signup", formData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert(res.data.message, "success"));
    navigate("/login");
  } catch (err) {
    console.log(err.response.data);

    dispatch({
      type: IN_PROGRESS,
      payload: false,
    });
    dispatch(setAlert(err.response.data.message, "error"));
  }
};
export const verifyemail = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/user/verify", formData);
    dispatch({
      type: VERIFY_EMAIL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: GET_ERROR,
      payload: err.response,
    });
    dispatch({
      type: IN_PROGRESS,
      payload: false,
    });
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  // const body = { email, password };

  try {
    const res = await axios.post("http://localhost:5000/user/login", formData);
    console.log(res.data.token);
    localStorage.setItem("token", res.data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: IN_PROGRESS,
      payload: false,
    });
    dispatch(setAlert(res.data.message, "success"));
  } catch (err) {
    dispatch({
      type: IN_PROGRESS,
      payload: false,
    });
    dispatch(setAlert(err.response.data.message, "error"));
  }
};
export const passwordchange = (formData, navigate) => async (dispatch) => {
  // const body = { email, password };

  try {
    const res = await axios.post(
      "http://localhost:5000/user/passwordchange",
      formData
    );

    dispatch({
      type: PASSWORD_CHANGE,
      // payload: res.data,
    });

    dispatch(setAlert(res.data.message, "success"));
    dispatch(logout());
    navigate("/login");
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "error"));
  }
};
export const inprogress = (status) => async (dispatch) => {
  dispatch({
    type: IN_PROGRESS,
    payload: status,
  });
};
export const clearalert = () => {
  return {
    type: REMOVE_ALERT,
  };
};

// Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
  dispatch({
    type: IN_PROGRESS,
    payload: false,
  });
};
