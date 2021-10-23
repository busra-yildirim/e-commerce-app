// seçilen kategoriye göre filtreli görünücek
export const products = (product) => {
  return {
    type: "ALL_PRODUCTS",
    payload: product,
  };
};
// seçilen kategoriye göre filtreli görünücek
export const filterProducts = (product) => {
  return {
    type: "FILTER_PRODUCTS",
    payload: product,
  };
};

// satın alındıgında ürün listesine isSold true olucak
export const buyToProduct = (product) => {
  return {
    type: "FILTER_PRODUCTS",
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
// teklif verilen ürün teklif verdiklerime düşücek
export const getOffer = (getOffer) => {
  return {
    type: "GET_OFFER_PRODUCTS",
    payload: getOffer,
  };
};
