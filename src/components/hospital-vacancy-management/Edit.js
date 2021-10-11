import React, { Component } from 'react';
import firebase from '../TravelFunction/Firebase';
//import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
//import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      hospital_ID: '',
      hospital_name: '',
      district: '',
      treatment_wards: '',
      total_beds: '',
      total_icu_beds: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('hospitals').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const hospital = doc.data();
        this.setState({
          key: doc.id,
          hospital_ID: hospital.hospital_ID,
          hospital_name: hospital.hospital_name,
          district: hospital.district,
          treatment_wards: hospital.treatment_wards,
          total_beds: hospital.total_beds,
          total_icu_beds: hospital.total_icu_beds
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({hospital:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { hospital_ID, hospital_name, district, treatment_wards, total_beds, total_icu_beds } = this.state;

    const updateRef = firebase.firestore().collection('hospitals').doc(this.state.key);
    updateRef.set({
      hospital_ID,
      hospital_name,
      district,
      treatment_wards,
      total_beds,
      total_icu_beds
    }).then((docRef) => {
      this.setState({
        key: '',
        hospital_ID: '',
        hospital_name: '',
        district: '',
        treatment_wards: '',
        total_beds: '',
        total_icu_beds: ''
      });
      window.location.href=`/HShow/`+this.props.match.params.id
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


  render() {
    return (

      <>

      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">

          <div style={{ padding: 20 }}>
            <Typography variant="h4" style={style}>
              Edit Hospital
            </Typography>
          </div>  
          </div>
          <div class="panel-body">

            

          <Button variant="contained" color="primary" onClick={event => window.location.href='/vacancy'}>
                    List of Hospitals
          </Button>
            
            <form onSubmit={this.onSubmit}>

                <TextField type="text" placeholder="Hospital Name" fullWidth margin="normal" name="hospital_name" value={this.state.hospital_name} onChange={this.onChange}/>
         
                <TextField type="text" placeholder="District" fullWidth margin="normal" name="district" value={this.state.district} onChange={this.onChange}/>
            
                <TextField type="number" placeholder="Treatment Wards" fullWidth margin="normal" name="treatment_wards" value={this.state.treatment_wards} onChange={this.onChange}/>
             
                <TextField type="number" placeholder="Total Beds" fullWidth margin="normal" name="total_beds" value={this.state.total_beds} onChange={this.onChange}/>

                <TextField type="number" placeholder="Total ICU Beds" fullWidth margin="normal" name="total_icu_beds" value={this.state.total_icu_beds} onChange={this.onChange}/>
            
                <Button type="submit" variant="contained" color="primary"  startIcon={<SaveIcon />} onClick={this.savehospital}>Save</Button>
              
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

export default Edit;