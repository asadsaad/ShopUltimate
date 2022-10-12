import {
  CreateOrder,
  OrderActionAttempt,
  OrderActionSuccess,
  OrderActionFailed,
  GET_DASHBOARD_ORDERS,
  GET_USER_ORDERS,
  GET_SINGLE_ORDER,
} from "../types";

const initialState = {
  c_orders: [],
  s_orders: [],
  loading: null,
  order: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CreateOrder:
      return {
        ...state,
        loading: false,
      };
    case OrderActionAttempt:
      return {
        ...state,
        loading: true,
      };
    case OrderActionSuccess:
      return {
        ...state,
        loading: false,
      };
    case OrderActionFailed:
      return {
        ...state,
        loading: false,
      };
    case GET_DASHBOARD_ORDERS:
      return {
        ...state,
        loading: false,
        s_orders: action.payload,
      };
    case GET_SINGLE_ORDER:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case GET_USER_ORDERS:
      return {
        ...state,
        loading: false,
        c_orders: action.payload,
      };
    default:
      return state;
  }
};
