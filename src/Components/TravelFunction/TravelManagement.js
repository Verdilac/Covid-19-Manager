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
import flight_tracker from "./flight_tracker.PNG";
import Flight from "./Flight.PNG";
import firebase from "./Firebase";
import Container from "react-bootstrap/Container";
import FlightCarousel from "./FlightCarousel";

// Sub Component Imports
import DataTable from "./DataTable";

import BtnSetMain from "./BtnSetMain";
import DataTableLogic from "./DataTableLogic";
// import FlightCarousel from "./FlightCarousel";
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
  image: {
    width: "100%",
    height: "400px",
    marginTop: theme.spacing(2),
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
    <div>
      {/* <Container className="my-4"> */}
      {/* <FlightCarousel /> */}
      {/* </Container>{" "} */}
      <div>
        {/* <PopupForm className={classes.spacing}></PopupForm> */}
        <BtnSetMain className={classes.btnset}></BtnSetMain>

        <DataTableLogic></DataTableLogic>
      </div>
    </div>
  );
}
