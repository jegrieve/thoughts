import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const TopicsCard = () => {
  const data = [
    { name: 'funny' },
    { name: 'news' },
    { name: 'sports' },
    { name: 'random' },
    { name: 'dev' },
    { name: 'funny' },
    { name: 'news' },
    { name: 'sports' },
    { name: 'random' },
    { name: 'dev' },
  ];
  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 275, marginTop: 2, maxWidth: 450 }}
    >
      <CardContent>
        <Grid container spacing={1}>
          {data.map((data) => {
            return (
              <Grid item xs={6}>
                <Box>
                  <Typography>{data.name}</Typography>
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
