import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { Link } from 'react-router-dom';
import logo from '../../assets/thoughtsLogo.png';

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { removeUser } = bindActionCreators(actionCreators, dispatch);

  const logoutUser = () => {
    localStorage.removeItem('SavedToken');
    removeUser();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'lightGrey' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 3 }}
          >
            <Link to="/home">
              <img src={logo} width={110} />
            </Link>
          </Typography>
          {user ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ marginRight: 3 }}>
                <Link
                  className="no-decoration decorate-hover"
                  to={`/user/${user.uuid}`}
                >
                  <Typography sx={{ fontSize: 26, color: 'white' }}>
                    {user.username}
                  </Typography>
                </Link>
              </Box>
              <Box>
                <Button
                  sx={{ fontSize: 17, paddingTop: 1 }}
                  onClick={logoutUser}
                >
                  Sign Out
                </Button>
              </Box>
            </Box>
          ) : (
            <Box>
              <Link
                className="no-decoration"
                sx={{ fontSize: 21 }}
                to="/sign-in"
              >
                <Button>Sign In</Button>
              </Link>
              <Link
                className="no-decoration"
                to="/sign-up"
                sx={{ fontSize: 21 }}
              >
                <Button>Sign Up</Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
