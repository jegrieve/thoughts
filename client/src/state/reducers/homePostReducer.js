const reducer = (state = null, action) => {
  switch (action.type) {
    case 'setHomePosts':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
