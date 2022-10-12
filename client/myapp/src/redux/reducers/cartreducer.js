import products from "../../components/product/products";
import store from "../store";
import {
  ADD_TO_CART,
  CART_QUANTITY_DECREAMENT,
  CART_QUANTITY_INCREAMENT,
  GET_USER_CART,
  REMOVE_ITEM_FROM_CART,
} from "../types";

const initialState = {
  cartItems: [],
  carts: [],
  cartTotal: 0,
  loading: false,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_CART:
      return {
        ...state,
        cartItems: action.payload.data.cartItems,
        carts: action.payload.data,
        cartTotal: action.payload.data.carttotal,
      };
    case ADD_TO_CART:
      const item = action.payload.product;
      const id = action.payload.id;
      // const iscart = state.carts.find(
      //   (cart) => cart.store === action.payload.shopid
      // );
      // const incart = iscart?.cartItems.find((item) =>
      //   item.product._id == id ? true : false
      // );
      // console.log(action.payload.cart[0]);
      const data_ = state.carts;

      const cartToChangeIndex_ = data_.findIndex(
        ({ store }) => store === action.payload.shopid
      );
      console.log(cartToChangeIndex_);
      if (cartToChangeIndex_ >= 0) {
        const carttoupdate_ = data_[cartToChangeIndex_];
        const incart = carttoupdate_.cartItems.find((item) =>
          item.product._id == id ? true : false
        );
        var upatedcart_ = {
          ...carttoupdate_,
          cartItems: incart
            ? carttoupdate_.cartItems.map((item) =>
                item.product._id == id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...carttoupdate_.cartItems, { product: item, quantity: 1 }],
        };
      }

      return {
        ...state,
        carts:
          cartToChangeIndex_ < 0
            ? [...state.carts, action.payload.cart[0]]
            : [
                // create a new data array
                ...data_.slice(0, cartToChangeIndex_), // the comments before the updated comment
                upatedcart_,
                ...data_.slice(cartToChangeIndex_ + 1), // the comments after the updated comment
              ],
        // carts: iscart
        //   ? {
        //       ...iscart,
        //       cartItems: iscart.cartItems.map((item) =>
        //         item.product._id === action.payload.product._id
        //           ? { ...item, quantity: item.quantity + 1 }
        //           : [...iscart.cartItems, { product: item, quantity: 1 }]
        //       ),
        //     }
        //   : [...state.carts, action.payload.cart[0]],
        // ),
        // carts: iscart
        //   ? {

        //       iscart.cartItems.find((itemp) =>
        //         itemp.product._id == item._id
        //           ? { ...itemp, quantity: item.quantity + 1 }
        //           : [...iscart.cartItems, { product: item, quantity: 1 }]
        //       ),
        //     }
        //   : [...state.carts, action.payload.cart[0]],
        // cartItems: incart
        //   ? state.cartItems.map((item) =>
        //       item.product._id == id
        //         ? { ...item, quantity: item.quantity + 1 }
        //         : item
        //     )
        //   : [...state.cartItems, { product: item, quantity: 1 }],
        cartTotal: action.payload.carttotal.carttotal,
      };
    case REMOVE_ITEM_FROM_CART:
      const data = state.carts;

      const cartToChangeIndex = data.findIndex(
        ({ _id }) => _id === action.payload.cartid
      );

      const carttoupdate = data[cartToChangeIndex];

      const updatedcart = {
        ...carttoupdate,
        cartItems: carttoupdate.cartItems.filter(
          (item) => item.product._id !== action.payload.id
        ),
      };

      return {
        ...state,
        carts:
          carttoupdate.cartItems.length <= 1
            ? state.carts.filter((cart) => cart._id !== carttoupdate._id)
            : [
                // create a new data array
                ...data.slice(0, cartToChangeIndex), // the comments before the updated comment
                updatedcart, // the updated comment
                ...data.slice(cartToChangeIndex + 1), // the comments after the updated comment
              ],

        cartTotal: action.payload.data.data.carttotal,
      };
    case CART_QUANTITY_INCREAMENT:
      return {
        ...state,
        carts: state.carts.map((cart) =>
          cart._id === action.payload.cartid
            ? {
                ...cart,
                cartItems: cart.cartItems.map((item) =>
                  item.product._id === action.payload.id
                    ? { ...item, quantity: action.payload.data.data }
                    : item
                ),
              }
            : cart
        ),
        // cartItems: state.cartItems.map((item) =>
        //   item.product._id == action.payload.id
        //     ? { ...item, quantity: action.payload.data.data }
        //     : item
        // ),
        cartTotal: action.payload.data.carttotal,
      };
    case CART_QUANTITY_DECREAMENT:
      return {
        ...state,
        carts: state.carts.map((cart) =>
          cart._id === action.payload.cartid
            ? {
                ...cart,
                cartItems: cart.cartItems.map((item) =>
                  item.product._id === action.payload.id
                    ? { ...item, quantity: action.payload.data.data }
                    : item
                ),
              }
            : cart
        ),
        // cartItems: state.cartItems.map((item) =>
        //   item.product._id == action.payload.id
        //     ? { ...item, quantity: action.payload.data.data }
        //     : item
        // ),
        cartTotal: action.payload.data.carttotal,
      };

    default:
      return state;
  }
};
