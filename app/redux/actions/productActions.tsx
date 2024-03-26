export const addProductAction = product => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};

export const removeProductAction = product => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product,
  };
};
