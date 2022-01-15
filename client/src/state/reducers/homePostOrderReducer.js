const reducer = (state = 'DESC', action) => {
  switch (action.type) {
    case 'setPostOrder':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
