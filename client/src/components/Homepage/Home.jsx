import React, { useState, useEffect } from 'react';
import TopicsCard from './TopicsCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PostFeed from './PostFeed';
import Typography from '@mui/material/Typography';
const Home = () => {
  return (
    <div className="homepage-container">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="div">
              Topics
            </Typography>
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
