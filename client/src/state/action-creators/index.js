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
