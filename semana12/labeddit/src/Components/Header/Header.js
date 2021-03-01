import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { gotoLoginPage, gotoRegisterPage, gotoFeedPage } from '../../Router/Coordinator'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import Logo from '../../images/logo.png'
import {Img} from './Styled'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const history = useHistory()

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
     
      </FormGroup>
      <AppBar position="fixed" color={'inherit'}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} /* color="inherit" */ aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           <Img src={Logo} alt=''/>
          </Typography>
          {auth && (
            <div>

            
              <IconButton
                fontSize={'large'}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}

                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => { gotoRegisterPage(history) }}>Cadastrar</MenuItem>
                <MenuItem onClick={() => { gotoFeedPage(history) }}>Login</MenuItem>
                <MenuItem onClick={() => { gotoFeedPage(history) }}>Feed</MenuItem>
              </Menu>
              {/* <Button onClick={() => { gotoRegisterPage(history) }}>Cadastrar</Button>
              <Button onClick={() => { gotoFeedPage(history) }}>Feed</Button> */}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}


