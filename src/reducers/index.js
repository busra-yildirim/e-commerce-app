const initialState = {
  products: [],
  filteredProducts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "FILTER_PRODUCTS":
      return { ...state, filteredProducts: action.payload };
    default:
      return state;
  }
};
export default reducer;
