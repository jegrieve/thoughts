import React, { useEffect } from 'react';
import Routes from './routes';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import axios from 'axios';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { getUser } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (localStorage.getItem('SavedToken') && !user) {
      const token = localStorage.getItem('SavedToken').split(' ')[1];
      axios
        .post('http://localhost:5000/api/v1/login-session', {
          headers: { Authorization: token },
        })
        .then(function (response) {
          if (response.data.user) {
            getUser(response.data.user);
          } else {
            console.log('No user found');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);
  console.log(user);
  return <Routes />;
};

export default App;
