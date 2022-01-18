import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
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
  const user = useSelector((state) => state.user);

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
          setFormError(false);
          setPostInput('');
          setHomeLimit(postLimit + 1);
        } else {
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
      sx={{
        minWidth: 275,
        marginTop: 2,
        maxWidth: 450,
        backgroundColor: 'lightGrey',
        textAlign: 'center',
      }}
    >
      <CardContent>
        <Box>
          <Typography variant="h4" component="span">
            Create Thought
          </Typography>
        </Box>
        <Box>
          <form onSubmit={submitCreatePostInput}>
            <FormControl>
              <TextField
                sx={{ marginTop: 1, backgroundColor: 'white', borderRadius: 1 }}
                disabled
                id="filled-disabled"
                variant="filled"
                value={getCurrentTopic()}
                label="Current Topic:"
              />
              <TextField
                sx={{
                  marginTop: 1,
                  backgroundColor: 'white',
                  borderRadius: 1,
                }}
                id="outlined-multiline-static"
                label="Thoughts?"
                multiline
                onChange={enterPostInputs}
                error={formError}
                value={postInput}
                rows={4}
                inputProps={{
                  maxLength: 255,
                }}
                required
              />
              <Button
                sx={{ marginTop: 1, backgroundColor: 'white' }}
                variant="outlined"
                type="submit"
                disabled={(() => {
                  if (user) {
                    return false;
                  }
                  return true;
                })()}
              >
                Create
              </Button>
            </FormControl>
            {!user ? (
              <Box>
                <Typography sx={{ fontSize: 12, fontStyle: 'italic' }}>
                  must be signed in to create
                </Typography>
              </Box>
            ) : (
              false
            )}
          </form>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
