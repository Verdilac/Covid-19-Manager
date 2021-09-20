import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import HamburgerMenu from './Dashboard/HamburgerMenu';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const style = {
    flexGrow: 1
}





const NavBar = () => {

    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>

                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <HamburgerMenu />
                </IconButton>

                    <Typography variant="h6" style={style}>
                        Quarantine Center Manager
                    </Typography>

                    <Button color="inherit">User</Button>
                    
                    <AccountCircle />

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
