import products from "../../components/product/products";
import { ADD_CATAGERY, GET_CATAGERY } from "../types";

const initialState = {
  catageries: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATAGERY:
      return {
        ...state,
        catageries: action.payload.catagery,
      };
    case ADD_CATAGERY:
      return {
        ...state,
        products: [...state.catageries, action.payload.catagery],
      };
    default:
      return state;
  }
};
