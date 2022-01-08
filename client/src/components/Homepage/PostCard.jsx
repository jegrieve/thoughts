import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const data = {
  id: 1,
  name: 'User',
  time: '1:35 PM PST',
  topic: 'funny',
  body: 'this is an example message for this app, this is where the user can post his brilliant ideas/thoughts/jokes/other',
};

const bull = (
  <Box
    component="span"
    sx={{
      display: 'flex',
      alignItems: 'center',
      mx: '3px',
      transform: 'scale(1.5)',
    }}
  >
    •
  </Box>
);

const PostCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box>
          <Typography variant="h5">> {data.topic}</Typography>
        </Box>
        <Box display="flex" paddingX={1}>
          <Box>
            <Typography component="p">{data.name}</Typography>
          </Box>
          {bull}
          <Box>
            <Typography component="p">{data.time}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography component="p" padding={1}>
            {data.body}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
