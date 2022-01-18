import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import PostCard from '../Homepage/PostCard';
import Typography from '@mui/material/Typography';

const UserProfile = (props) => {
  const [userPosts, setUserPosts] = useState([]);
  const [postLimit, setPostLimit] = useState(5);
  const { userId } = useParams();

  useEffect(() => {
    getUserPosts();
  }, []);

  useEffect(() => {
    getUserPosts();
  }, [postLimit]);

  const getUserPosts = () => {
    axios
      .get(
        `http://localhost:5000/api/v1/user-posts?userId=${userId}&limit=${postLimit}&order=DESC`
      )
      .then((res) => {
        if (res.data) {
          setUserPosts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} md={12} marginTop={3}>
          <Box>
            <Typography variant="h5">Recent Thoughts:</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {userPosts.length > 0 ? (
            <>
              {userPosts.map((data) => {
                return <PostCard data={data} />;
              })}
            </>
          ) : (
            <Box sx={{ marginTop: 3, marginLeft: 1 }}>
              <Typography fontStyle="italic" variant="h5">
                No recent thoughts.
              </Typography>
            </Box>
          )}
          {userPosts.length > 0 && (
            <Button
              onClick={() => {
                setPostLimit(postLimit + 5);
              }}
            >
              Load More
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;
