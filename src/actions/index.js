import { api } from "../api";

export const products = (products) => {
  return {
    type: "ALL_PRODUCTS",
    payload: products,
  };
};

export const filterProducts = (filteredProducts) => {
  return {
    type: "FILTER_PRODUCTS",
    payload: filteredProducts,
  };
};
export const selected = (product) => {
  return {
    type: "SELECTED_PRODUCTS",
    payload: product,
  };
};

export const fetchAllProducts = () => async (dispatch) => {
  return api.get("/product/all").then((response) => {
    dispatch(products(response.data));
    dispatch(filterProducts(response.data));
  });
};
