import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

const CreateTopic = () => {
  const [createTopicInput, setCreateTopicInput] = useState({ name: '' });
  const [formError, setFormError] = useState(false);

  const topics = useSelector((state) => state.topic);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { setMainTopic, appendTopic } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const enterCreateTopicInput = (e) => {
    setCreateTopicInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.toLowerCase(),
    }));
  };

  const submitCreateTopicInputs = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('SavedToken');
    axios
      .post(
        'http://localhost:5000/api/v1/create-topic',
        {
          name: createTopicInput['name'],
        },
        {
          headers: { Authorization: token },
        }
      )
      .then(function (response) {
        if (response.data.uuid) {
          handleFormSubmitSucess(response.data.name);
        } else {
          setFormError(true);
        }
      })
      .catch(function (error) {
        setFormError(true);
      });
  };

  const handleFormSubmitSucess = (name) => {
    setFormError(false);
    setCreateTopicInput({ name: '' });
    setMainTopic(name);
    if (topics.indexOf(name) === -1) {
      appendTopic(name);
    }
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
            Create Topic
          </Typography>
        </Box>
        <Box>
          <form onSubmit={submitCreateTopicInputs}>
            <FormControl>
              <TextField
                name="name"
                sx={{ marginTop: 2, backgroundColor: 'white', borderRadius: 1 }}
                error={formError}
                onChange={enterCreateTopicInput}
                value={createTopicInput['name']}
                inputProps={{
                  maxLength: 15,
                  minLength: 3,
                }}
                required
                InputLabelProps={{ required: false }}
                id="create-topic-home"
                label="New Topic"
              />
              <Button
                sx={{ marginTop: 2, backgroundColor: 'white' }}
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

export default CreateTopic;
