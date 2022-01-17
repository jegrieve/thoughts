import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
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

const PostCard = (props) => {
  return (
    <Card sx={{ minWidth: 275, marginTop: 2, backgroundColor: 'lightGrey' }}>
      <CardContent>
        <Box>
          <Typography fontWeight="bold" variant="h5">
            {props.data.Topic.name}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} paddingX={1}>
          <Box>
            <Link
              className="no-decoration decorate-hover"
              to={`/user/${props.data.User.uuid}`}
            >
              <Typography
                sx={{ paddingRight: 1, color: 'white' }}
                component="p"
              >
                {props.data.User.username}
              </Typography>
            </Link>
          </Box>
          {bull}
          <Box>
            <Typography
              sx={{ fontSize: 12, fontStyle: 'italic', paddingLeft: 1 }}
              component="p"
            >
              {props.data.createdAt}
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
