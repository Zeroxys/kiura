const initialState = {
  persistLogin: 'LoginAccount',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SCREEN_OPTION':
      return {
        ...state,
        persistLogin: action.payload,
      };
    case 'LOGIN_RESET':
      return {...initialState};
    default:
      return state;
  }
};

export default loginReducer;
