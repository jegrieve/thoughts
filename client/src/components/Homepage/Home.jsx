import React, { useState, useEffect } from 'react';
import TopicsCard from './TopicsCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PostFeed from './PostFeed';
const Home = () => {
  return (
    <div className="homepage-container">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <TopicsCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <PostFeed />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
