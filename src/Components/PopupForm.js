import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

import firebase from "./Firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  PopupForm: {
    // margin: theme.spacing(3),
    // marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  },
}));

export default function PopupForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //FORM Values
  const [vfirstName, setvfirstName] = useState("");
  const [vlastName, setvlastName] = useState("");
  const [vpassportNumber, setvpassportNumber] = useState("");

  //Functions
  //This is called when the form submit button is pressed--Will send the data to the firbase firestore
  const handleAddUser = () => {
    // console.log(vfirstName, vlastName, vpassportNumber);

    const firestore = getFirestore(firebase).ref("/Foreigners");
    let data = {
      Fname: vfirstName,
      Lname: vlastName,
      passport_no: vpassportNumber,
    };
    const element = firestore.push(data);
  };

  function test(t) {
    //defining a function
    if (t === undefined) {
      //if t=undefined, call tt
      console.log(t); //call t
    }
    return t;
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        className={classes.PopupForm}
      >
        New Entry
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Entry</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create New Profile For Passenger
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            value={vfirstName}
            onChange={(e) => {
              setvfirstName(e.target.value);
            }}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Last Name"
            onChange={(e) => {
              setvlastName(e.target.value);
            }}
            value={vlastName}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Passport No"
            value={vpassportNumber}
            onChange={(e) => {
              setvpassportNumber(e.target.value);
            }}
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Nationality"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Age"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Phone No"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleAddUser();
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
