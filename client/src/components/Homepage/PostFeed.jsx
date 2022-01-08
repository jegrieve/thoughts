import React from 'react';
import PostCard from './PostCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PostFeed = () => {
  const data = [
    {
      id: 1,
      name: 'User',
      time: '1:35 PM PST',
      topic: 'funny',
      body: 'this is an example message for this app, this is where the user can post his brilliant ideas/thoughts/jokes/other',
    },
    {
      id: 1,
      name: 'User',
      time: '1:35 PM PST',
      topic: 'funny',
      body: 'this is an example message for this app, this is where the user can post his brilliant ideas/thoughts/jokes/other',
    },
    {
      id: 1,
      name: 'User',
      time: '1:35 PM PST',
      topic: 'funny',
      body: 'this is an example message for this app, this is where the user can post his brilliant ideas/thoughts/jokes/other',
    },
    // {
    //   id: 1,
    //   name: 'User',
    //   time: '1:35 PM PST',
    //   topic: 'funny',
    //   body: 'this is an example message for this app, this is where the user can post his brilliant ideas/thoughts/jokes/other',
    // },
    // {
    //   id: 1,
    //   name: 'User',
    //   time: '1:35 PM PST',
    //   topic: 'funny',
    //   body: 'this is an example message for this app, this is where the user can post his brilliant ideas/thoughts/jokes/other',
    // },
    // {
    //   id: 1,
    //   name: 'User',
    //   time: '1:35 PM PST',
    //   topic: 'funny',
    //   body: 'this is an example message for this app, this is where the user can post his brilliant ideas/thoughts/jokes/other',
    // },
    // {
    //   id: 1,
    //   name: 'User',
    //   time: '1:35 PM PST',
    //   topic: 'funny',
    //   body: 'this is an example message for this app, this is where the user can post his brilliant ideas/thoughts/jokes/other',
    // },
  ];

  return (
    <div>
      {data.map((data) => {
        return <PostCard data={data} />;
      })}
      <Button>Load More</Button>
    </div>
  );
};

export default PostFeed;
