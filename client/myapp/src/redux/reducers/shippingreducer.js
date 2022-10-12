import { SET_SHIPPING, SHIPPING_ACTION_ATTEMPT, GET_SHIPPING } from "../types";

const initialState = {
  loading: false,
  shipping: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SHIPPING:
      return {
        ...state,
        loading: false,
        shipping: action.payload.data,
      };
    case GET_SHIPPING:
      return {
        ...state,
        loading: false,
        shipping: action.payload.data,
      };
    case SHIPPING_ACTION_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
