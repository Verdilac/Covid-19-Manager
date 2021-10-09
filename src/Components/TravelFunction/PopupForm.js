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
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "semantic-ui-react";
import { Box } from "@material-ui/core";
import { OutlinedInput } from "@material-ui/core";
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

//form validation

// pop up
import Modal from "react-bootstrap/Modal";

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
  var sense;

  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClosepop = () => setShow(false);
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

  var validity = false;

  function checkvalidity(e) {
    if (
      vfirstName === "" ||
      vlastName === "" ||
      vage === "" ||
      vpassportNumber === "" ||
      vphoneNumber === "" ||
      vemailAddress === "" ||
      vaddress === "" ||
      vQicd === ""
    ) {
      handleShow();
    }
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
            error={!vfirstName}
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
            error={!vlastName}
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
            error={!vpassportNumber}
            required
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
            error={!vemailAddress}
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
            error={!vage}
            required
            onChange={(e) => {
              setvage(e.target.value);
            }}
            type="number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            error={!vaddress}
            required
            onChange={(e) => {
              setvaddress(e.target.value);
            }}
            type="text"
            fullWidth
          />{" "}
          <TextField
            margin="dense"
            id="phone"
            label="Phone No"
            error={!vphoneNumber}
            required
            onChange={(e) => {
              setvphoneNumber(e.target.value);
            }}
            type="number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="qcid"
            required
            label="QCID"
            error={!vQicd}
            onChange={(e) => {
              setvQicd(e.target.value);
            }}
            type="text"
            fullWidth
          />
          {/* ------------------------------------------------------------------- */}
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value={sense}
                onChange={handleChange}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Box>
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
              required
              label="Depature Date"
              error={!vdepatureDate}
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
              error={!vvisaDuration}
              required
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
              error={!vareaToBeTraveled}
              required
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
              error={!vprovince}
              required
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
              error={!vworkAddress}
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
              checkvalidity();
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Modal show={show} onHide={handleClosepop}>
        <Modal.Header closeButton>
          <Modal.Title>Oops Some Inputs Are Missing</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Make Sure There Are No Empty Feilds.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosepop}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosepop}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
