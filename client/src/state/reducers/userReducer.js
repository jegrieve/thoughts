const reducer = (state = null, action) => {
  switch (action.type) {
    case 'setUser':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
