import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HamburgerMenu from './HamburgerMenu';

const style = {
    flexGrow: 1
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0),
    },
  }));

const NavBar = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <HamburgerMenu />
                </IconButton>
                    {/*<IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>*/}
                    <Typography variant="h6" style={style}>
                        Hospital Management
                    </Typography>
                    {/*<Button color="inherit">Login</Button>*/}
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
