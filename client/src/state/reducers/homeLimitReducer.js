const reducer = (state = 4, action) => {
  switch (action.type) {
    case 'setHomeLimit':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
