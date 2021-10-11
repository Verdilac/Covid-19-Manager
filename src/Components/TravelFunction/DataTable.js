import React from "react";
import { Table } from "react-bootstrap";
import { Nav, Tab, Tabs, Row, Col } from "react-bootstrap";
import Sonnet from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../App.css";
import { useState, useEffect } from "react";

//POP UP FORM
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
import firebase from "./Firebase";
import { NoteAdd } from "@material-ui/icons";

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

export default function DataTable({
  ufirstName,
  setufirstName,
  ulastName,
  setulastName,
  upassportNumber,
  setupassportNumber,
  uemailAddress,
  setuemailAddress,
  uage,
  setuage,
  uaddress,
  setuaddress,
  uphoneNumber,
  setuphoneNumber,
  uQicd,
  setuQicd,
  uid,
  setuid,
  udepatureDate,
  setudepatureDate,
  uvisaDuration,
  setuvisaDuration,
  uareaToBeTraveled,
  setuareaToBeTraveled,
  uprovince,
  setuprovince,
  uworkAddress,
  setuworkAddress,
  // key = "Native",
  // setKey,
  // handleDelete,
  nativeData,
  setnativeData,
  foreignerData,
  setforeignerData,
  value,
  setValue,
  handleChange,
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  // handleUpdate,
  handleUpdateClick,
}) {
  const classes = useStyles();

  //setting key for foreigner and native tabs
  const [key, setKey] = useState("Native");

  //CRUD OPERATIONS
  const handleUpdate = () => {
    if (key === "Native") {
      const firestore = firebase.database().ref("/Native").child(uid);
      firestore.update({
        //took this off id:uid cuze didnt neeed to change the id
        Passport_no: upassportNumber,
        Fname: ufirstName,
        Lname: ulastName,
        Age: uage,
        Address: uaddress,
        Work_place_address: uworkAddress,
        Email_address: uemailAddress,
        Phone_no: uphoneNumber,
        Province: uprovince,
        Qcid: uQicd,
      });
    } else {
      const firestore = firebase.database().ref("/Foreigner").child(uid);
      firestore.update({
        // took this off id:uid cuze didnt neeed to change the id
        Passport_no: upassportNumber,
        Fname: ufirstName,
        Lname: ulastName,
        Age: uage,
        Address: uaddress,
        Email_address: uemailAddress,
        Phone_no: uphoneNumber,
        Depature_date: udepatureDate,
        Vissa_duration: uvisaDuration,
        Area_to_be_travled: uareaToBeTraveled,
        Qcid: uQicd,
      });
    }
  };

  const handleDelete = (id) => {
    if (key === "Native") {
      const firestore = firebase.database().ref("/Native").child(id);
      firestore.remove();
    } else {
      const firestore = firebase.database().ref("/Foreigner").child(id);
      firestore.remove();
    }
  };

  //Data Display
  useEffect(() => {
    const firestore = firebase.database().ref("/Native");
    firestore.on("value", (response) => {
      const Ndata = response.val();
      const nativeinfo = [];
      for (let id in Ndata) {
        nativeinfo.push({
          id: id,
          Passport_no: Ndata[id].Passport_no,
          Fname: Ndata[id].Fname,
          Lname: Ndata[id].Lname,
          Email_address: Ndata[id].Email_address,
          Age: Ndata[id].Age,
          Address: Ndata[id].Address,
          Work_Address: Ndata[id].Work_place_address,
          Phone_no: Ndata[id].Phone_no,
          Province: Ndata[id].Province,
          Qcid: Ndata[id].Qcid,
        });
      }
      setnativeData(nativeinfo);
    });
  }, []);

  useEffect(() => {
    const firestore = firebase.database().ref("/Foreigner");
    firestore.on("value", (response) => {
      const Fdata = response.val();
      const foreigninfo = [];
      for (let id in Fdata) {
        foreigninfo.push({
          id: id,
          Passport_no: Fdata[id].Passport_no,
          Fname: Fdata[id].Fname,
          Lname: Fdata[id].Lname,
          Email_address: Fdata[id].Email_address,
          Age: Fdata[id].Age,
          Address: Fdata[id].Address,
          Phone_no: Fdata[id].Phone_no,
          Depature_date: Fdata[id].Depature_date,
          Vissa_duration: Fdata[id].Vissa_duration,
          Area_to_be_travled: Fdata[id].Area_to_be_travled,
          Qcid: Fdata[id].Qcid,
        });
      }
      setforeignerData(foreigninfo);
    });
  }, []);

  return (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update Entry</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Passenger Profile</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              value={ufirstName}
              onChange={(e) => {
                setufirstName(e.target.value);
              }}
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              value={ulastName}
              label="Last Name"
              onChange={(e) => {
                setulastName(e.target.value);
              }}
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              value={upassportNumber}
              label="Passport No"
              onChange={(e) => {
                setupassportNumber(e.target.value);
              }}
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="emailaddress"
              value={uemailAddress}
              label="Email Address"
              type="email"
              onChange={(e) => {
                setuemailAddress(e.target.value);
              }}
              fullWidth
            />
            <TextField
              margin="dense"
              id="age"
              value={uage}
              label="Age"
              onChange={(e) => {
                setuage(e.target.value);
              }}
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="address"
              value={uaddress}
              label="Address"
              onChange={(e) => {
                setuaddress(e.target.value);
              }}
              type="email"
              fullWidth
            />{" "}
            <TextField
              margin="dense"
              id="phone"
              value={uphoneNumber}
              label="Phone No"
              onChange={(e) => {
                setuphoneNumber(e.target.value);
              }}
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="qcid"
              value={uQicd}
              label="QCID"
              onChange={(e) => {
                setuQicd(e.target.value);
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
                value={udepatureDate}
                label="Depature Date"
                onChange={(e) => {
                  setudepatureDate(e.target.value);
                }}
                type="email"
                fullWidth
              />{" "}
              <TextField
                margin="dense"
                id="name"
                value={uvisaDuration}
                label="Visa Duration"
                onChange={(e) => {
                  setuvisaDuration(e.target.value);
                }}
                type="email"
                fullWidth
              />
              <TextField
                margin="dense"
                id="name"
                value={uareaToBeTraveled}
                label="Area To be Travalled"
                onChange={(e) => {
                  setuareaToBeTraveled(e.target.value);
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
                value={uprovince}
                label="Province"
                onChange={(e) => {
                  setuprovince(e.target.value);
                }}
                type="email"
                fullWidth
              />{" "}
              <TextField
                margin="dense"
                id="name"
                value={uworkAddress}
                label="WorkPlace Address"
                onChange={(e) => {
                  setuworkAddress(e.target.value);
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
                handleUpdate();
              }}
              color="primary"
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Native" title="Native" value="Native"></Tab>
        <Tab eventKey="Foreigner" title="Foreigner" value="Foreigner"></Tab>
      </Tabs>
      <Table striped bordered hover className="my-3 ">
        {key === "Native" ? (
          <thead>
            <tr>
              <th>#</th>
              <th>PassPort No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone No</th>
              <th>Work Address</th>
              <th>Province</th>
              <th>QCID</th>
            </tr>
          </thead>
        ) : (
          <thead>
            <tr>
              <th>#</th>
              <th>PassPort No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Depature Date</th>
              <th>Visa Duration</th>
              <th>Areas To Be Travelled</th>
              <th>QCID</th>
            </tr>
          </thead>
        )}

        {key === "Native"
          ? nativeData.map((Ndata, index) => {
              return (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{Ndata.Passport_no}</td>
                    <td>{Ndata.Fname}</td>
                    <td>{Ndata.Lname}</td>
                    <td>{Ndata.Email_address}</td>
                    <td>{Ndata.Age}</td>
                    <td>{Ndata.Address}</td>
                    <td>{Ndata.Phone_no}</td>
                    <td>{Ndata.Work_Address}</td>
                    <td>{Ndata.Province}</td>
                    <td>{Ndata.Qcid}</td>

                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleClickOpen();
                          handleUpdateClick(Ndata);
                        }}
                      >
                        Update
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleDelete(Ndata.id);
                        }}
                      >
                        Delete
                      </Button>{" "}
                    </td>
                  </tr>
                </tbody>
              );
            })
          : foreignerData.map((Fdata, index) => {
              return (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{Fdata.Passport_no}</td>
                    <td>{Fdata.Fname}</td>
                    <td>{Fdata.Lname}</td>
                    <td>{Fdata.Email_address}</td>
                    <td>{Fdata.Age}</td>
                    <td>{Fdata.Address}</td>
                    <td>{Fdata.Phone_no}</td>
                    <td>{Fdata.Depature_date}</td>
                    <td>{Fdata.Vissa_duration}</td>
                    <td>{Fdata.Area_to_be_travled}</td>
                    <td>{Fdata.Qcid}</td>

                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleClickOpen();
                          handleUpdateClick(Fdata);
                        }}
                      >
                        Update
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleDelete(Fdata.id);
                        }}
                      >
                        Delete
                      </Button>{" "}
                    </td>
                  </tr>
                </tbody>
              );
            })}
      </Table>
    </div>
  );
}
