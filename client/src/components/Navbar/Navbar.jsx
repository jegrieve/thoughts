import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Thoughts</Link>
          </Typography>
          {user ? (
            <Box>
              <Link to="/">{user.username}</Link>
            </Box>
          ) : (
            <Button color="inherit">
              <Link to="/sign-in">Sign In</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
