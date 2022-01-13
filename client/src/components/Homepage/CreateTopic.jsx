import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import axios from 'axios';

const CreateTopic = () => {
  const [createTopicInput, setCreateTopicInput] = useState({ name: '' });
  const [formError, setFormError] = useState(false);

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
        console.log(response);
        if (response.data.uuid) {
          //if user not signed in, we should disable btns,
          handleFormSubmitSucess();
        } else {
          if (response.data.errors) {
            setFormError(true);
          }
        }
      })
      .catch(function (error) {
        setFormError(true);
      });
  };

  const handleFormSubmitSucess = () => {
    setFormError(false);
    setCreateTopicInput({ name: '' });
    //set states of topic and post to the submitted topic.
  };

  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 275, marginTop: 2, maxWidth: 450 }}
    >
      <CardContent>
        <Box>
          <Typography variant="h3" component="span">
            Create Topic
          </Typography>
        </Box>
        <Box>
          <form onSubmit={submitCreateTopicInputs}>
            <FormControl>
              <TextField
                name="name"
                error={formError}
                onChange={enterCreateTopicInput}
                value={createTopicInput['name']}
                required
                InputLabelProps={{ required: false }}
                id="create-topic-home"
                label="topic"
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

export default CreateTopic;
