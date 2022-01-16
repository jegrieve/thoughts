import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PostCard = (props) => {
  return (
    <Card sx={{ minWidth: 275, marginTop: 2 }}>
      <CardContent>
        <Box>
          <Typography variant="h5">{props.data.Topic.name}</Typography>
        </Box>
        <Box display="flex" paddingX={1}>
          <Box>
            <Typography component="p">{props.data.User.username}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography component="p" padding={1}>
            {props.data.body}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
