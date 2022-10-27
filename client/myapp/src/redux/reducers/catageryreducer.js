import products from "../../components/product/products";
import { ADD_CATAGERY, GET_CATAGERY, GET_CATAGERY_LIST } from "../types";

const initialState = {
  catageries: [],
  catagerieslist: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATAGERY:
      return {
        ...state,
        catageries: action.payload.categoryList,
      };
    case ADD_CATAGERY:
      return {
        ...state,
        products: [...state.catageries, action.payload.catagery],
      };
    case GET_CATAGERY_LIST:
      return {
        ...state,
        catagerieslist: action.payload,
      };
    default:
      return state;
  }
};
