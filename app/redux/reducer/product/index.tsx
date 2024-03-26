const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        cart: action.payload,
      };
    case 'CLEAN_PRODUCTS':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default productReducer;
