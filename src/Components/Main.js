import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import PopupForm from "./PopupForm";

// Sub Component Imports
import DataTable from "./DataTable";
import { Container } from "@material-ui/core";
import BtnSetMain from "./BtnSetMain";

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
  spacing: {
    margin: theme.spacing(4),
    padding: theme.spacing(4),
  },

}));

export default function Main() {
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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Travel Management
          </Typography>
          {auth && (
            <div>
              <IconButton
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
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Container>
        <img src="data:image/jpeg;base64,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"></img>
      </Container>

      <div>
        {/* <PopupForm className={classes.spacing}></PopupForm> */}
        <BtnSetMain className={classes.btnset}></BtnSetMain>
        <DataTable></DataTable>
      </div>
    </div>
  );
}
