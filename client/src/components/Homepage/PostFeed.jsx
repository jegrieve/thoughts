import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

const PostFeed = () => {
  const mainTopic = useSelector((state) => state.mainTopic);
  const postLimit = useSelector((state) => state.homeLimit);
  const homePosts = useSelector((state) => state.homePost);
  const dispatch = useDispatch();

  const { setHomeLimit, setHomePosts } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getSelectedPosts();
  }, [postLimit]);

  const getSelectedPosts = () => {
    axios
      .get(
        `http://localhost:5000/api/v1/homepage-posts?name=${mainTopic}&limit=${postLimit}`
      )
      .then((res) => {
        if (res.data) {
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

  return (
    <div>
      {homePosts.map((data) => {
        return <PostCard data={data} />;
      })}
      <Button onClick={getMorePosts}>Load More</Button>
    </div>
  );
};

export default PostFeed;
