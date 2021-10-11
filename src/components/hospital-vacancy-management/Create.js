import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import firebase from '../TravelFunction/Firebase';
//import { Link } from 'react-router-dom';
import NavBar from "./Navbar";
import ID_Generator from './ID_Generator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Box from '@material-ui/core/Box';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('hospitals');
    this.state = {
      hospital_ID: '',
      hospital_name: '',
      district: '',
      treatment_wards: '',
      total_beds: '',
      total_icu_beds: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

  this.state.hospital_ID = document.getElementById('HID').textContent;


    const { hospital_ID, hospital_name, district, treatment_wards, total_beds, total_icu_beds } = this.state;

    this.ref.add({
      hospital_ID,
      hospital_name,
      district,
      treatment_wards,
      total_beds,
      total_icu_beds
    }).then((docRef) => {
      this.setState({
        hospital_ID: '',
        hospital_name: '',
        district: '',
        treatment_wards: 0,
        total_beds: 0,
        total_icu_beds: 0
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
    
    this.state.hospital_ID = document.getElementById('HID').textContent;
    
    
    const { hospital_ID } = this.state;
    
    this.ref.add({
      hospital_ID,
      hospital_name:'Hospital Name',
      district: 'District Name',
      treatment_wards: 10,
      total_beds: 100,
      total_icu_beds: 10
    }).then((docRef) => {
      this.setState({
        hospital_ID: '',
        hospital_name: 'Hospital Name',
        district: 'District Name',
        treatment_wards: 10,
        total_beds: 100,
        total_icu_beds: 10
      });
      window.location.href=`/vacancy`
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


  render() {
    const { hospital_name, district, treatment_wards, total_beds, total_icu_beds } = this.state;
    return (
      <>

      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            
          <div style={{ padding: 20 }}>
            <Typography variant="h4" style={style}>Add Hospital</Typography>
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
         
                <Typography style ={id_field_style}>Hospital ID - </Typography>   <Typography id ="HID"><ID_Generator/></Typography> 

                <TextField type="text" placeholder="Hospital Name" fullWidth margin="normal" name="hospital_name" value={this.state.hospital_name} onChange={this.onChange}/>
      
                <TextField type="text" placeholder="District" fullWidth margin="normal" name="district" value={this.state.district} onChange={this.onChange}/>
         
                <TextField type="number" placeholder="COVID-19 Treatment Wards" fullWidth margin="normal" name="treatment_wards" value={this.state.treatment_wards} onChange={this.onChange}/>
         
                <TextField type="number" placeholder="Total Beds" fullWidth margin="normal" name="total_beds" value={this.state.total_beds} onChange={this.onChange}/>
        
                <TextField type="number" placeholder="Total ICU Beds" fullWidth margin="normal" name="total_icu_beds" value={this.state.total_icu_beds} onChange={this.onChange}/>

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