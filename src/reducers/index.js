const initialState = {
  products: [],
  filteredProducts: [],
  selectedProducts: {},
  giveOffer: [],
  isSold: null,
  isOfferable: null,
  isAddedByUser: null,
  offer: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "FILTER_PRODUCTS":
      return { ...state, filteredProducts: action.payload };
    case "BUYING_PRODUCTS":
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload,
      };
    case "SELECTED_PRODUCTS":
      return { ...state, selectedProducts: action.payload };
    case "GIVE_OFFER_PRODUCTS":
      return { ...state, giveOffer: action.payload };
    case "OFFER_PRICE":
      return { ...state, offer: action.payload };

    default:
      return state;
  }
};
export default reducer;
