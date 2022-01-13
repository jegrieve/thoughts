const reducer = (state = [], action) => {
  switch (action.type) {
    case 'setTopics':
      return action.payload;
    case 'appendTopic':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
