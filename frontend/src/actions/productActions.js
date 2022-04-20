import axios from "axios";
import {
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_FAILED,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../constants/productConstants.js";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAILED,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    });
  }
};
