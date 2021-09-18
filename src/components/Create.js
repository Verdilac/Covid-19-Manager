import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";
import ID_Generator from './ID_Generator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
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
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  hospital_list(){

    this.props.history.push('/');
}

  render() {
    const { hospital_name, district, treatment_wards, total_beds, total_icu_beds } = this.state;
    return (
      <>
      <div>
            <NavBar/>
        </div>


      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            
          <div style={{ padding: 20 }}>
            <Typography variant="h4" style={style}>Add Hospital</Typography>
          </div>
          
          </div>
          <div class="panel-body">


           
          <div style={{ padding: 20 }}>
            <Button variant="contained" color="primary" onClick={() => this.hospital_list()}>
                    List of Hospitals
            </Button>
          </div>

            <form  style={formContainer} onSubmit={this.onSubmit}>
         
                <Typography style ={id_field_style}>Hospital ID - </Typography>   <Typography id ="HID"><ID_Generator/></Typography> 

                <TextField type="text" placeholder="Hospital Name" fullWidth margin="normal" name="hospital_name" value={this.state.hospital_name} onChange={this.onChange}/>
      
                <TextField type="text" placeholder="District" fullWidth margin="normal" name="district" value={this.state.district} onChange={this.onChange}/>
         
                <TextField type="number" placeholder="COVID-19 Treatment Wards" fullWidth margin="normal" name="treatment_wards" value={this.state.treatment_wards} onChange={this.onChange}/>
         
                <TextField type="number" placeholder="Total Beds" fullWidth margin="normal" name="total_beds" value={this.state.total_beds} onChange={this.onChange}/>
        
                <TextField type="number" placeholder="Total ICU Beds" fullWidth margin="normal" name="total_icu_beds" value={this.state.total_icu_beds} onChange={this.onChange}/>

                <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />} onClick={this.savecenter}>Save</Button>

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