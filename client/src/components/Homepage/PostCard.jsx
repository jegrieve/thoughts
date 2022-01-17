import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  return (
    <Card sx={{ minWidth: 275, marginTop: 2, backgroundColor: 'lightGrey' }}>
      <CardContent>
        <Box>
          <Typography variant="h5">{props.data.Topic.name}</Typography>
        </Box>
        <Box display="flex" paddingX={1}>
          <Box>
            <Typography component="p">
              <Link to={`/user/${props.data.User.uuid}`}>
                {props.data.User.username}
              </Link>
            </Typography>
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
