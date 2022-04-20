import {
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_FAILED,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../constants/productConstants.js";

export const productListReducer = (state = { products: [] }, action) => {
  console.log("productlist", state);
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  console.log("product", state);
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
