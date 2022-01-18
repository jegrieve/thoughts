import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const PostFeed = () => {
  const mainTopic = useSelector((state) => state.mainTopic);
  const postLimit = useSelector((state) => state.homeLimit);
  const homePosts = useSelector((state) => state.homePost);
  const homePostOrder = useSelector((state) => state.homePostOrder);
  const dispatch = useDispatch();

  const { setHomeLimit, setHomePosts, setPostOrder } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getSelectedPosts();
  }, [postLimit]);

  useEffect(() => {
    getSelectedPosts();
  }, [mainTopic]);

  useEffect(() => {
    getSelectedPosts();
  }, [homePostOrder]);

  const getSelectedPosts = () => {
    axios
      .get(
        `http://localhost:5000/api/v1/homepage-posts?name=${mainTopic}&limit=${postLimit}&order=${homePostOrder}`
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setHomePosts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMorePosts = () => {
    setHomeLimit(postLimit + 4);
  };

  const getNewestPosts = () => {
    setPostOrder('DESC');
  };

  const getOldestPosts = () => {
    setPostOrder('ASC');
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          defaultValue={'newest'}
        >
          <MenuItem onClick={getNewestPosts} value={'newest'}>
            newest
          </MenuItem>
          <MenuItem onClick={getOldestPosts} value={'oldest'}>
            oldest
          </MenuItem>
        </Select>
      </FormControl>
      {homePosts === null ? (
        <Box sx={{ marginTop: 3, fontSize: 30 }}>
          <CircularProgress size={100} />
        </Box>
      ) : homePosts.length ? (
        <>
          {homePosts.map((data) => {
            return (
              <PostCard
                key={data.uuid}
                getPosts={getSelectedPosts}
                data={data}
              />
            );
          })}
        </>
      ) : (
        <Box sx={{ marginTop: 3, marginLeft: 1 }}>
          <Typography fontStyle="italic" variant="h5">
            No thoughts on this topic yet.
          </Typography>
        </Box>
      )}
      {homePosts && homePosts.length ? (
        <Button onClick={getMorePosts}>Load More</Button>
      ) : (
        false
      )}
    </div>
  );
};

export default PostFeed;
