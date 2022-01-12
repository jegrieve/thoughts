import React, { useState, useEffect } from 'react';
import TopicsCard from './TopicsCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PostFeed from './PostFeed';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CreatePost from './CreatePost';

const Home = () => {
  return (
    <div className="homepage-container">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box>
              <TopicsCard />
            </Box>
            <Box>
              <CreatePost />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="span">
              Post feed
            </Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                defaultValue={'newest'}
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={'newest'}>newest</MenuItem>
                <MenuItem value={'oldest'}>oldest</MenuItem>
              </Select>
            </FormControl>
            <PostFeed />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
