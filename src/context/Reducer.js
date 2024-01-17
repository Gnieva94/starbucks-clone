//TYPES
const GET_MENU = "GET_MENU";
const GET_SUBCATEGORY = "GET_SUBCATEGORY";
const GET_PRODUCT = "GET_PRODUCT";

export const Reducer = (state,action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MENU:
      return {
        ...state,
        menu: payload,
      };
    case GET_SUBCATEGORY:
      return {
        ...state,
        subcategory: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
}
