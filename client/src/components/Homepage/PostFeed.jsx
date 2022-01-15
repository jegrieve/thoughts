import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useSelector } from 'react-redux';

const PostFeed = () => {
  // const [loadedPosts, setLoadedPosts] = useState([]);
  // const [postLimit, setPostLimit] = useState(4);
  // const mainTopic = useSelector((state) => state.mainTopic);

  //my issue now, is on app load, i need to get a maintopic and initially it doesnt have a main topic.

  // useEffect(() => {
  //   getSelectedPosts();
  // }, []);

  // const getSelectedPosts = () => {
  //   axios
  //     .get(
  //       `http://localhost:5000/api/v1/homepage-posts?name=${mainTopic}&limit=${postLimit}`
  //     )
  //     .then((res) => {
  //       if (res.data) {
  //         setLoadedPosts(res.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      {/* {loadedPosts.map((data) => {
        return <PostCard data={data} />;
      })} */}
      <Button>Load More</Button>
    </div>
  );
};

export default PostFeed;
