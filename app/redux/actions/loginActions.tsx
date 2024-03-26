export const persistLoginAction = data => {
  return {
    type: 'SET_PERSIST_LOGIN',
    payload: data,
  };
};

export const setUsernameAction = data => {
  return {
    type: 'SET_USERNAME',
    payload: data,
  };
};
