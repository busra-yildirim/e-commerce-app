import { api } from "../api";

// seçilen kategoriye göre filtreli görünücek
export const products = (products) => {
  return {
    type: "ALL_PRODUCTS",
    payload: products,
  };
};
// seçilen kategoriye göre filtreli görünücek
export const filterProducts = (filteredProducts) => {
  return {
    type: "FILTER_PRODUCTS",
    payload: filteredProducts,
  };
};

// satın alındıgında ürün listesine isSold true olucak
export const selected = (product) => {
  return {
    type: "SELECTED_PRODUCTS",
    payload: product,
  };
};
export const buyToProduct = (product) => {
  return {
    type: "BUYING_PRODUCTS",
    payload: product,
  };
};

// ürün eklendiğinde ürün listesine eklenicek
export const addToProduct = (product) => {
  return {
    type: "ADD_PRODUCTS",
    payload: product,
  };
};
// teklif verilen ürün teklif verdiklerime düşücek
export const giveOffer = (giveOffer) => {
  return {
    type: "GIVE_OFFER_PRODUCTS",
    payload: giveOffer,
  };
};
export const newOffer = (newOffer) => {
  return {
    type: "OFFER_PRICE",
    payload: newOffer,
  };
};

// teklif verilen ürün teklif verdiklerime düşücek
export const getOffer = (getOffer) => {
  return {
    type: "GET_OFFER_PRODUCTS",
    payload: getOffer,
  };
};
export const fetchAllProducts = () => async (dispatch) => {
  return api.get("/product/all").then((response) => {
    dispatch(products(response.data));
    dispatch(filterProducts(response.data));
  });
};
