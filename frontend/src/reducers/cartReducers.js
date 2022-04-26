import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_CLEAR,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  console.log("state", state);
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        console.log("adsfasdf", state);
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      const remove_item = action.payload;
      const checkItem = state.cartItems.find(
        (x) => x.product === remove_item.product
      );

      if (checkItem) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (x) => x.product !== remove_item.product
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems] };
      }
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    case CART_CLEAR:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
