import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
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
    default:
      return state;
  }
};
