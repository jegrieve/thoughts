const reducer = (state = '', action) => {
  switch (action.type) {
    case 'setMainTopic':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
