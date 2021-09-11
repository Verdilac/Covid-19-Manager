import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('centers');
    this.state = {
      centername: '',
      district: '',
      qi: '',
      capacity: '',

    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { centername, district, qi, capacity} = this.state;

    this.ref.add({
      centername,
      district,
      qi,
      capacity
    }).then((docRef) => {
      this.setState({
        centername: '',
        district: '',
        qi: 0,
        capacity: 0
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  qclist(){

    this.props.history.push('/');
}

  render() {
    const { centername, district, qi, capacity } = this.state;
    return (
      <>
      <div>
            <NavBar/>
        </div>


      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            
            <Typography variant="h4" style={style}>Add Center</Typography>

          </div>
          <div class="panel-body">


           

            <Button variant="contained" color="primary" onClick={() => this.qclist()}>
                    Quarantine Center List
                </Button>

            <form  style={formContainer} onSubmit={this.onSubmit}>
         
                <TextField type="text" placeholder="Center Name" fullWidth margin="normal" name="centername" value={this.state.centername} onChange={this.onChange}/>
      
        
          
                <TextField type="text" placeholder="District" fullWidth margin="normal" name="district" value={this.state.district} onChange={this.onChange}/>
         
           
            
                <TextField type="number" placeholder="Quarantined Individuals" fullWidth margin="normal" name="qi" value={this.state.qi} onChange={this.onChange}/>
         
         
             
                <TextField type="number" placeholder="Capacity" fullWidth margin="normal" name="capacity" value={this.state.capacity} onChange={this.onChange}/>
        

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
const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
};
export default Create;