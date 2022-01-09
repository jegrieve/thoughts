import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const UserProfile = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box>User stuff</Box>
          <Box>User created time</Box>
          <Box>User bio stuff</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>User's PostFeed</Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;
