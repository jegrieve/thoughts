import React, { useState } from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
const SignIn = () => {
  const [signInUserInputs, setSignInUserInputs] = useState({
    username: '',
    password: '',
  });
  const [formError, setFormError] = useState(false);

  const dispatch = useDispatch();

  const { getUser } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();

  const enterSignInInputs = (e) => {
    setSignInUserInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitUserInputs = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/v1/login', {
        username: signInUserInputs['username'],
        password: signInUserInputs['password'],
      })
      .then(function (response) {
        if (response.data.user) {
          localStorage.setItem('SavedToken', 'Bearer ' + response.data.token);
          getUser(response.data.user);
          navigate('/home');
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
      <Card sx={{ marginTop: 10, backgroundColor: 'darkGrey' }}>
        <CardContent>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2">Sign In</Typography>
            <form onSubmit={submitUserInputs}>
              <FormControl onSubmit={submitUserInputs}>
                <TextField
                  error={formError}
                  sx={{
                    marginTop: 3,
                    backgroundColor: 'white',
                    borderRadius: 1,
                  }}
                  required
                  onChange={enterSignInInputs}
                  value={signInUserInputs['username']}
                  InputLabelProps={{ required: false }}
                  name="username"
                  id="sign-in-username"
                  label="Username"
                />
                <TextField
                  error={formError}
                  sx={{
                    marginTop: 3,
                    backgroundColor: 'white',
                    borderRadius: 1,
                  }}
                  required
                  type="password"
                  name="password"
                  onChange={enterSignInInputs}
                  value={signInUserInputs['password']}
                  InputLabelProps={{ required: false }}
                  id="sign-in-password"
                  label="Password"
                />
                <Button
                  variant="outlined"
                  type="submit"
                  sx={{ marginTop: 3, backgroundColor: 'white' }}
                >
                  Sign In
                </Button>
              </FormControl>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignIn;
