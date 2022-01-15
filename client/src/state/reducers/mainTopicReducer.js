const reducer = (state = 'coding', action) => {
  switch (action.type) {
    case 'setMainTopic':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
