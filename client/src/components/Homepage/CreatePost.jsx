import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const CreatePost = () => {
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
          <TextField id="standard-basic" label="search" variant="standard" />
        </Box>
        <Box>
          <form>
            <FormControl>
              <TextField
                required
                InputLabelProps={{ required: false }}
                id="sign-in-username"
                label="Username"
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
