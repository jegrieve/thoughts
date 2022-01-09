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

const SignIn = () => {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2">Sign In</Typography>
            <form>
              <FormControl>
                <TextField
                  required
                  InputLabelProps={{ required: false }}
                  id="sign-in-username"
                  label="Username"
                />
                <TextField
                  required
                  InputLabelProps={{ required: false }}
                  id="sign-in-password"
                  label="Password"
                />
                <Button variant="outlined" type="submit">
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
