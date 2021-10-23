const initialState = {
  productsData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      console.log("state", state);
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
