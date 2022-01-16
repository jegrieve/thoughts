import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

const SignUp = () => {
  const [signUpUserInputs, setSignUpUserInputs] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { getUser, removeUser } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();

  const enterSignUpInputs = (e) => {
    setSignUpUserInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitUserInputs = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/v1/register', {
        username: signUpUserInputs['username'],
        email: signUpUserInputs['email'],
        password: signUpUserInputs['password'],
      })
      .then(function (response) {
        console.log(response);
        if (response.data.newUser) {
          localStorage.setItem('SavedToken', 'Bearer ' + response.data.token);
          getUser(response.data.newUser);
          navigate('/');
        } else {
          setFormError(true);
        }
      })
      .catch(function (error) {
        setFormError(true);
      });
  };
  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: 10 }}>
        <CardContent>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2">Sign Up</Typography>
            <form onSubmit={submitUserInputs}>
              <FormControl>
                <TextField
                  required
                  sx={{ marginTop: 3 }}
                  InputLabelProps={{ required: false }}
                  onChange={enterSignUpInputs}
                  error={formError}
                  name="username"
                  id="sign-up-username"
                  label="Username"
                />
                <TextField
                  required
                  sx={{ marginTop: 3 }}
                  InputLabelProps={{ required: false }}
                  onChange={enterSignUpInputs}
                  name="email"
                  id="sign-up-email"
                  label="Email"
                  type="email"
                />
                <TextField
                  required
                  sx={{ marginTop: 3 }}
                  InputLabelProps={{ required: false }}
                  onChange={enterSignUpInputs}
                  name="password"
                  id="sign-up-password"
                  label="Password"
                  type="password"
                />
                <Button sx={{ marginTop: 3 }} variant="outlined" type="submit">
                  Sign Up
                </Button>
              </FormControl>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUp;
