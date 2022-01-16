import React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { TextField } from '@mui/material';

const SignUp = () => {
  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: 10 }}>
        <CardContent>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2">Sign Up</Typography>
            <form>
              <FormControl>
                <TextField
                  required
                  sx={{ marginTop: 3 }}
                  InputLabelProps={{ required: false }}
                  id="sign-up-username"
                  label="Username"
                />
                <TextField
                  required
                  sx={{ marginTop: 3 }}
                  InputLabelProps={{ required: false }}
                  id="sign-up-email"
                  label="Email"
                />
                <TextField
                  required
                  sx={{ marginTop: 3 }}
                  InputLabelProps={{ required: false }}
                  id="sign-up-password"
                  label="Password"
                />
                <TextField
                  required
                  sx={{ marginTop: 3 }}
                  InputLabelProps={{ required: false }}
                  id="sign-up-password-confirm"
                  label="Password Confirmation"
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
