import React  from 'react';
import firebase from '../TravelFunction/Firebase';

import IDGenerator from "./IDgenerator"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import { Container } from '@material-ui/core';

class Create extends React.Component{

  constructor() {
    super();
    this.ref = firebase.firestore().collection('centers');
    this.state = {
      qcid: '',
      centername: '',
      district: '',
    
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

    this.state.qcid = document.getElementById('QID').textContent;
    
    const { qcid, centername, district, capacity} = this.state;
   
    this.ref.add({
      qcid,
      centername,
      district,
  
      capacity
    }).then((docRef) => {
      this.setState({
        qcid: '',
        centername: '',
        district: '',
        
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

    return (
      <>
    

        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              
              <Typography variant="h3" style={style}>Add Center</Typography>

            </div>

              <div class="panel-body">

                  <Container style ={style2}>

                      <Button variant="contained" color="primary" onClick={() => this.qclist()}>
                                  Quarantine Center Management Dashboard
                      </Button>
                      
                  </Container>

              <form  style={formContainer} onSubmit={this.onSubmit}>
              
                  <Typography style ={style3}>Quarantine Center ID_</Typography>  <Typography id ="QID"><IDGenerator/></Typography> 
                

                  <TextField type="text" placeholder="Center Name" fullWidth margin="normal" name="centername" value={this.state.centername} onChange={this.onChange}/>
                  
          
                  <TextField type="text" placeholder="District" fullWidth margin="normal" name="district" value={this.state.district} onChange={this.onChange}/>
          
            
          
                  <TextField type="number" placeholder="Capacity" fullWidth margin="normal" name="capacity" value={this.state.capacity} onChange={this.onChange}/>
          

                  <Button type="submit" variant="contained" color="inherit" startIcon={<SaveIcon />} onClick={this.savecenter}>Save</Button>

              </form>
            </div>
          </div>
        </div>
    </>
    );
  }
}

const style ={
  color: '#3e54af',
  height: 80,
  display: 'flex',
  justifyContent: 'center'

}

const style2 ={

  height : '70px'

}

const style3 ={

  color: '#3e54af'

}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
};

export default Create;