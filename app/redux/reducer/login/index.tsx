const initialState = {
  persistLogin: false,
  username: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PERSIST_LOGIN':
      return {
        ...state,
        persistLogin: action.payload,
      };
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
