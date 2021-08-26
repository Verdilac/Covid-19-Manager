import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

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
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Last Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Passport No"
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
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
