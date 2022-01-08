import React from 'react';
import PostCard from './PostCard';
import Button from '@mui/material/Button';

const PostFeed = () => {
  return (
    <div>
      <PostCard />
      <Button>Load More</Button>
    </div>
  );
};

export default PostFeed;
