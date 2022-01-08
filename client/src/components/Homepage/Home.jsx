import React, { useState, useEffect } from 'react';
import TopicsCard from './TopicsCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PostFeed from './PostFeed';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Home = () => {
  return (
    <div className="homepage-container">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" component="span">
                Topics
              </Typography>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Box>

            <TopicsCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="div">
              Post feed
            </Typography>
            <PostFeed />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
