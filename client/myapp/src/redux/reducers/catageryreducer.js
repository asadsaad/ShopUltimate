import products from "../../components/product/products";
import {
  ADD_CATAGERY,
  GET_CATAGERY,
  GET_CATAGERY_LIST,
  GET_SINGLE_CATAGERY,
  UPDATE_CATAGERY,
} from "../types";

const initialState = {
  catageries: [],
  catagerieslist: [],
  catagery: null,
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
        catagerieslist: [...state.catagerieslist, action.payload.catagery],
      };
    case GET_CATAGERY_LIST:
      return {
        ...state,
        catagerieslist: action.payload,
      };
    case GET_SINGLE_CATAGERY:
      return {
        ...state,
        catagery: state.catageries.filter((cat) => cat.name == action.payload),
      };
      case UPDATE_CATAGERY:
      return {
        ...state,
        catagerieslist: state.catagerieslist.map((cat) =>
          cat._id === action.payload._id
            ? action.payload
            : cat
        ),
      };
    default:
      return state;
  }
};
