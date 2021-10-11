import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../TravelFunction/Firebase';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IDGenerator  from './IDgenerator';
import 'firebase/firestore';
import { Container } from 'react-bootstrap';
import SaveIcon from '@material-ui/icons/Save';

class Form extends React.Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('users');
    this.state = {
      nic: '',
      userID: '',
      userName: '',
      email: '',
      jobTitle: '',
      address: '',
      phoneNumber: '',
      dob: '',
      //docID: '',
      //specialization: '',
      qcs: '',
      hs: '',
      doct: '',
      admin: '',
      healthOfficial: '',
      count:'',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.state.count = parseInt(document.getElementById('IDcontext').textContent);

    if(document.getElementById('QCS').checked == true){

      this.state.qcs = '1';
      this.state.hs ='0';
      this.state.doct = '0';
      this.state.admin = '0';
      this.state.healthOfficial = '0';
      this.state.jobTitle = 'Quarantine Center Staff'

      this.state.userID = "QC" + document.getElementById('IDcontext').textContent;

    }else if(document.getElementById('HS').checked == true){

      this.state.qcs = '0';
      this.state.hs ='1';
      this.state.doct = '0';
      this.state.admin = '0';
      this.state.healthOfficial = '0';
      this.state.jobTitle = 'Hospital Staff';

      this.state.userID = "HS" + document.getElementById('IDcontext').textContent;

    }else if(document.getElementById('DOCT').checked == true){

      this.state.qcs = '0';
      this.state.hs ='0';
      this.state.doct = '1';
      this.state.admin = '0';
      this.state.healthOfficial = '0';
      this.state.jobTitle = 'Doctor';


      this.state.userID = "DR" + document.getElementById('IDcontext').textContent;


    }else if(document.getElementById('ADMIN').checked == true){

      this.state.qcs = '0';
      this.state.hs ='0';
      this.state.doct = '0';
      this.state.admin = '1';
      this.state.healthOfficial = '0';
      this.state.jobTitle = 'System Administrator';

     

      this.state.userID ="AD" + document.getElementById('IDcontext').textContent;


    }else if (document.getElementById('HO').checked == true) {

      this.state.qcs ='0';
      this.state.hs ='0';
      this.state.doct ='0';
      this.state.admin ='0';
      this.state.healthOfficial ='1';
      this.state.jobTitle ='Government Health Official';

      this.state.userID = "OF" + document.getElementById('IDcontext').textContent;
      
    }

    const { nic, userID, userName, email, jobTitle, address, phoneNumber, dob, qcs, hs, doct, admin, healthOfficial, count} = this.state;

    this.ref.add({
        nic,
        userID,
        userName,
        email,
        jobTitle,
        address,
        phoneNumber,
        dob,
        //docID,
        //specialization,
        qcs,
        hs,
        doct,
        admin,
        healthOfficial,
        count,
    }).then((docRef) => {
      this.setState({
        nic: '',
        userID: '',
        userName: '',
        email: '',
        jobTitle: '',
        address: '',
        phoneNumber: '',
        dob: '',
        //docID: '',
        //specialization
        qcs: '',
        hs: '',
        doct: '',
        admin: '',
        healthOfficial: '',
        count:'',
      });
      this.props.history.push("/")
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
            
          </div>
          <div class="panel-body">

          <Typography variant="h3" style={style}>User Registration Form</Typography>   

          <Typography>User ID_</Typography><Typography id="IDcontext"><IDGenerator/></Typography>
          
            <form   onSubmit={this.onSubmit}>

            <TextField type="text" placeholder="NIC" fullWidth margin="normal" name="nic" value ={this.state.nic}  onChange={this.onChange}/>

            <TextField type="text" placeholder="Email" fullWidth margin="normal" name="email" value ={this.state.email} onChange={this.onChange}/>
      
            <TextField type="text" placeholder="Full Name" required fullWidth margin="normal" name="userName" value ={this.state.userName}  onChange={this.onChange}/>

            <TextField type="text" placeholder="Address" fullWidth margin="normal" name="address" value ={this.state.address} onChange={this.onChange}/>

            <TextField type="text" placeholder="Phone Number" fullWidth margin="normal" name="phoneNumber" value ={this.state.phoneNumber} onChange={this.onChange}/>
            
            <TextField type="date" placeholder="DOB" fullWidth margin="normal" name="dob" value ={this.state.dob} onChange={this.onChange}/>

            

        <Typography style={style2}>Select User Type</Typography>   

          <div>
                        <Typography><input type ="radio" required name="ut" id = "QCS" value="qcs"  onChange={this.onChange} /> Quarantine Center Staff </Typography>

                        <Typography><input type ="radio" required name="ut" id = "HS" value="hs"  onChange={this.onChange} /> Hospital Staff </Typography>

                        <Typography><input type ="radio" required name="ut" id = "DOCT" value="doct" onChange={this.onChange} /> Doctor </Typography>

                        <Typography><input type ="radio" required name="ut" id = "ADMIN" value="admin"  onChange={this.onChange} /> Admin </Typography>

                        <Typography><input type ="radio" required name="ut" id = "HO" value="of" onChange={this.onChange} /> Health Official </Typography>           
          </div>

             <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />} onClick={this.saveuser}>Save</Button>

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
    
    display: 'flex',
    justifyContent: 'center'
}

const style2 ={
    color: '#3e54af',

}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
};
export default Form;