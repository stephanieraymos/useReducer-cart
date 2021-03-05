//State is current state before the update, action is what we want to do
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  return state;
};

export default reducer;
