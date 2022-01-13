import React, { useEffect } from 'react';
import Routes from './routes';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import axios from 'axios';

const App = () => {
  const user = useSelector((state) => state.user);
  const topic = useSelector((state) => state.topic);
  console.log(topic);

  const dispatch = useDispatch();
  const { getUser, setTopics } = bindActionCreators(actionCreators, dispatch);

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

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/topics')
      .then((res) => {
        const topics = res.data.map((el) => {
          return el.name;
        });
        setTopics(topics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(user);

  return <Routes />;
};

export default App;
