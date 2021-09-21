import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { shadows } from "@material-ui/system";

//Radio Button
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
//Accordian
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Firebase
import firebase from "./Firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { BorderBottomOutlined } from "@material-ui/icons";
import { isElementOfType } from "react-dom/test-utils";

const useStyles = makeStyles((theme) => ({
  PopupForm: {
    // margin: theme.spacing(3),
    // marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  },
  Cusaccordian: {
    boxShadow: 0,
    textShadow: 0,
    border: 0,
  },
  Textfeilds: {
    marginBottom: theme.spacing(2),
  },
}));

// -----***************--------------

export default function PopupForm() {
  //Radio Group Functions
  const [value, setValue] = React.useState("Foreigner");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /*------------------------------------*/
  //FORM Values
  const [vfirstName, setvfirstName] = useState("");
  const [vlastName, setvlastName] = useState("");
  const [vpassportNumber, setvpassportNumber] = useState("");
  const [vemailAddress, setvemailAddress] = useState("");
  const [vage, setvage] = useState("");
  const [vaddress, setvaddress] = useState("");
  const [vphoneNumber, setvphoneNumber] = useState("");
  const [vQicd, setvQicd] = useState("");
  //Foreigners
  const [vdepatureDate, setvdepatureDate] = useState("");
  const [vvisaDuration, setvvisaDuration] = useState("");
  const [vareaToBeTraveled, setvareaToBeTraveled] = useState("");
  //local
  const [vprovince, setvprovince] = useState("");
  const [vworkAddress, setvworkAddress] = useState("");

  /*------------------------------------*/

  //Functions
  //This is called when the form submit button is pressed--Will send the data to the firbase firestore
  const handleAddUser = (e) => {
    // console.log(vfirstName, vlastName, vpassportNumber);
    let refType;

    let data;

    if (isType() == "Foreigners") {
      console.log("Its a Foreigner");
      refType = "/Foreigner";
      data = {
        Fname: vfirstName,
        Lname: vlastName,
        Passport_no: vpassportNumber,
        Email_address: vemailAddress,
        Age: vage,
        Address: vaddress,
        Phone_no: vphoneNumber,
        Qcid: vQicd,
        Depature_date: vdepatureDate,
        Vissa_duration: vvisaDuration,
        Area_to_be_travled: vareaToBeTraveled,
      };
    } else {
      console.log("Local");
      refType = "/Native";
      data = {
        Fname: vfirstName,
        Lname: vlastName,
        Passport_no: vpassportNumber,
        Email_address: vemailAddress,
        Age: vage,
        Address: vaddress,
        Phone_no: vphoneNumber,
        Qcid: vQicd,
        Province: vprovince,
        Work_place_address: vworkAddress,
      };
    }

    const firestore = firebase.database().ref(refType);
    firestore.push(data);
  };

  function isType() {
    let travType;
    if (!vdepatureDate) {
      travType = "Local";
    } else {
      travType = "Foreigners";
    }
    return travType;
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
      {/* <FormControlLabel
        value="male"
        control={<Radio />}
        onClick={handleClickOpen}
        label="Male"
      /> */}
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
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Passport No"
            onChange={(e) => {
              setvpassportNumber(e.target.value);
            }}
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="emailaddress"
            label="Email Address"
            type="email"
            onChange={(e) => {
              setvemailAddress(e.target.value);
            }}
            fullWidth
          />
          <TextField
            margin="dense"
            id="age"
            label="Age"
            onChange={(e) => {
              setvage(e.target.value);
            }}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            onChange={(e) => {
              setvaddress(e.target.value);
            }}
            type="email"
            fullWidth
          />{" "}
          <TextField
            margin="dense"
            id="phone"
            label="Phone No"
            onChange={(e) => {
              setvphoneNumber(e.target.value);
            }}
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="qcid"
            label="QCID"
            onChange={(e) => {
              setvQicd(e.target.value);
            }}
            type="text"
            fullWidth
          />
          <Accordion border={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.Cusaccordian}
              border={0}
            >
              <FormControl
                component="fieldset"
                className={classes.Cusaccordian}
                border={0}
              >
                <RadioGroup
                  aria-label="Type"
                  name="Foreigner"
                  value={value}
                  onChange={handleChange}
                  border={0}
                >
                  <FormControlLabel
                    value="Foreigner"
                    control={<Radio />}
                    onClick={handleClickOpen}
                    label="Foreigner"
                    className={classes.Cusaccordian}
                    border={0}
                  />
                </RadioGroup>
              </FormControl>
            </AccordionSummary>
            <AccordionDetails
              className={classes.Cusaccordian}
              border={0}
            ></AccordionDetails>
            <TextField
              margin="dense"
              id="depaturedate"
              label="Depature Date"
              onChange={(e) => {
                setvdepatureDate(e.target.value);
              }}
              type="email"
              fullWidth
            />{" "}
            <TextField
              margin="dense"
              id="name"
              label="Visa Duration"
              onChange={(e) => {
                setvvisaDuration(e.target.value);
              }}
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Area To be Travalled"
              onChange={(e) => {
                setvareaToBeTraveled(e.target.value);
              }}
              type="email"
              fullWidth
              className={classes.Textfeilds}
            />
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="type"
                  name="local"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Local"
                    control={<Radio />}
                    onClick={handleClickOpen}
                    label="Local"
                  />
                </RadioGroup>
              </FormControl>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
            <TextField
              margin="dense"
              id="name"
              label="Province"
              onChange={(e) => {
                setvprovince(e.target.value);
              }}
              type="email"
              fullWidth
            />{" "}
            <TextField
              margin="dense"
              id="name"
              label="WorkPlace Address"
              onChange={(e) => {
                setvworkAddress(e.target.value);
              }}
              type="email"
              fullWidth
              className={classes.Textfeilds}
            />{" "}
          </Accordion>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleAddUser();
              isType();
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
