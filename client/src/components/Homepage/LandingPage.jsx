import React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import logo from '../../assets/thoughtsLogoLanding.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: 10, backgroundColor: 'darkGrey' }}>
        <CardContent>
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ marginTop: 2 }}>
              <img src={logo} width={220} />
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6">Share what you think.</Typography>
            </Box>
            <Link to="/home">
              <Button
                sx={{ marginTop: 1, backgroundColor: 'white' }}
                variant="filled"
              >
                Go
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LandingPage;
