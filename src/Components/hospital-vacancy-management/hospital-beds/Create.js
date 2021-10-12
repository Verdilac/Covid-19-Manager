import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import firebase from '../../TravelFunction/Firebase';
//import { Link } from 'react-router-dom';
//import NavBar from "./Navbar";
import ID_Generator from './ID_Generator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Box from '@material-ui/core/Box';
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('hospital_beds');
    this.state = {
      HBID: '',
      HID: '',
      patientID: '',
      patientName: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

  this.state.HBID = document.getElementById('HBID').textContent;


    const { HBID, HID, patientID, patientName } = this.state;

    this.ref.add({
        HBID, 
        HID, 
        patientID, 
        patientName
    }).then((docRef) => {
      this.setState({
        HBID: '',
        HID: '',
        patientID: '',
        patientName: ''
      });
      window.location.href=`/vacancy`
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  
  
  //DEMO BUTTON Function
  demo_button = (e) => {
    e.preventDefault();
    
    this.state.HBID = document.getElementById('HBID').textContent;
    
    
    const { HBID } = this.state;
    
    this.ref.add({
      HBID,
      HID:'HP0001',
      patientID: 'P000003',
      patientName: 'Patient Name'
    }).then((docRef) => {
      this.setState({
        HBID: '',
        HID:'HP0001',
        patientID: 'P000003',
        patientName: 'Patient Name'
      });
      window.location.href=`/vacancy`
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


  render() {
    const { HID, patientID, patientName } = this.state;
    return (
      <>

      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            
          <div style={{ padding: 20 }}>
            <Typography variant="h4" style={style}>Add Hospital Bed</Typography>
          </div>
          
          </div>
          <div class="panel-body">


           
          {/*<div style={{ padding: 20 }}>*/}
          <Box pt={0} marginTop={5} marginBottom={5}>
            <Button variant="contained" color="primary" onClick={event =>  window.location.href=`/vacancy`}>
                    List of Hospitals
            </Button>
          </Box>  
          {/*</div>*/}

            <form  style={formContainer} onSubmit={this.onSubmit}>
         
                <Typography style ={id_field_style}>Hospital Bed ID - </Typography>   <Typography id ="HBID"><ID_Generator/></Typography> 

                <TextField type="text" placeholder="Hospital ID" fullWidth margin="normal" name="HID" value={this.state.HID} onChange={this.onChange}/>

                <TextField type="text" placeholder="Patient ID" fullWidth margin="normal" name="patientID" value={this.state.patientID} onChange={this.onChange}/>
         
                <TextField type="text" placeholder="Patient Name" fullWidth margin="normal" name="patientName" value={this.state.patientName} onChange={this.onChange}/>

                <Box pt={2}> <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />} onClick={this.savecenter}>Save</Button> </Box>

                <Box pt={2} marginX={2}> <Button type="submit" variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />} onClick={this.demo_button}>DEMO</Button> </Box>

            </form>
          </div>
        </div>
      </div>


    </>
    );
  }
}


const style ={
  display: 'flex',
  justifyContent: 'center'

}

const id_field_style ={
  color: '#3e54af'
}
const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
};
export default Create;