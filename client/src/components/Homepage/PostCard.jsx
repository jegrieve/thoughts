import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from 'react-redux';
import axios from 'axios';

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
  const currentUser = useSelector((state) => state.user);

  const deletePost = () => {
    const token = localStorage.getItem('SavedToken');
    axios
      .delete(`http://localhost:5000/api/v1/delete-post/${props.data.uuid}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        console.log(response);
        props.getPosts();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 2, backgroundColor: 'lightGrey' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography fontWeight="bold" variant="h5">
              {props.data.Topic.name}
            </Typography>
          </Box>
          {currentUser &&
            currentUser.uuid === props.data.User.uuid &&
            props.getPosts && (
              <Box onClick={deletePost} sx={{ cursor: 'pointer' }}>
                <ClearIcon />
              </Box>
            )}
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
