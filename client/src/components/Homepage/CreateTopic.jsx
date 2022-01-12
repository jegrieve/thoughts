import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

const CreateTopic = () => {
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
          <form>
            <FormControl>
              <TextField
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
