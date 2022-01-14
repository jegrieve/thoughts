import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

const TopicsCard = () => {
  const [offset, setOffset] = useState(0);
  const [selectTopicInputs, setSelectTopicInputs] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);
  const topics = useSelector((state) => state.topic);

  const dispatch = useDispatch();
  const { setMainTopic } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setSelectedTopics(topics);
  }, [topics]);

  useEffect(() => {
    if (selectTopicInputs === '') {
      setOffset(0);
      setSelectedTopics(topics);
    } else {
      const charMatchesArr = getMatchingChars();
      setOffset(0);
      setSelectedTopics(charMatchesArr);
    }
  }, [selectTopicInputs]);

  const getMatchingChars = () => {
    const a = topics.filter((el) => {
      return el.slice(0, selectTopicInputs.length) === selectTopicInputs;
    });
    return a;
  };

  const increaseOffset = () => {
    if (offset + 6 < selectedTopics.length) {
      setOffset(offset + 6);
    }
  };
  const decreaseOffset = () => {
    if (offset !== 0) {
      setOffset(offset - 6);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 275, marginTop: 2, maxWidth: 450 }}
    >
      <CardContent>
        <Box>
          <Typography variant="h3" component="span">
            Topics
          </Typography>
          <TextField
            onChange={(e) => setSelectTopicInputs(e.target.value.toLowerCase())}
            id="standard-basic"
            label="search"
            variant="standard"
          />
          <ArrowBackIosIcon onClick={decreaseOffset} />
          <ArrowForwardIosIcon onClick={increaseOffset} />
        </Box>
        <Grid container spacing={1}>
          {selectedTopics.slice(offset, offset + 6).map((name) => {
            return (
              <Grid item xs={6}>
                <Box onClick={() => setMainTopic(name)}>
                  <Typography>{name}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TopicsCard;
