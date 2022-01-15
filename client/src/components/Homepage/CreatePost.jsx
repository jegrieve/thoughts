import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import axios from 'axios';

const CreatePost = () => {
  const [postInput, setPostInput] = useState('');
  const [formError, setFormError] = useState(false);
  const postLimit = useSelector((state) => state.homeLimit);
  const currentTopic = useSelector((state) => state.mainTopic);
  const topic = useSelector((state) => state.mainTopic);

  const dispatch = useDispatch();
  const { setHomeLimit } = bindActionCreators(actionCreators, dispatch);

  const enterPostInputs = (e) => {
    setPostInput(e.target.value);
  };

  const getCurrentTopic = () => {
    if (currentTopic !== '') {
      return currentTopic;
    } else {
      return 'Choose a topic';
    }
  };

  const submitCreatePostInput = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('SavedToken');
    axios
      .post(
        'http://localhost:5000/api/v1/create-post',
        {
          name: topic,
          body: postInput,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then(function (response) {
        if (response.data.uuid) {
          console.log(response);
          setFormError(false);
          setPostInput('');
          setHomeLimit(postLimit + 1);
        } else {
          console.log(response);
          setFormError(true);
        }
      })
      .catch(function (error) {
        console.log(error);
        setFormError(true);
      });
  };

  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 275, marginTop: 2, maxWidth: 450 }}
    >
      <CardContent>
        <Box>
          <Typography variant="h3" component="span">
            Create Post
          </Typography>
        </Box>
        <Box>
          <form onSubmit={submitCreatePostInput}>
            <FormControl>
              <TextField
                disabled
                id="filled-disabled"
                variant="filled"
                value={getCurrentTopic()}
              />
              <TextField
                id="outlined-multiline-static"
                label="Thoughts?"
                multiline
                onChange={enterPostInputs}
                error={formError}
                value={postInput}
                rows={4}
                required
              />
              <Button variant="outlined" type="submit">
                Create
              </Button>
            </FormControl>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
