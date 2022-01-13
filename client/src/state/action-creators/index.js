export const getUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: 'setUser',
      payload: user,
    });
  };
};

export const removeUser = () => {
  return (dispatch) => {
    dispatch({
      type: 'setUser',
      payload: null,
    });
  };
};

export const setTopics = (topics) => {
  return (dispatch) => {
    dispatch({
      type: 'setTopics',
      payload: topics,
    });
  };
};

export const appendTopic = (topic) => {
  return (dispatch) => {
    dispatch({
      type: 'appendTopic',
      payload: topic,
    });
  };
};

export const setMainTopic = (topic) => {
  return (dispatch) => {
    dispatch({
      type: 'setMainTopic',
      payload: topic,
    });
  };
};
