import React, { Component } from 'react';
import firebase from '../TravelFunction/Firebase';
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

class Edit extends Component {

  constructor(props) {
    super(props);
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

  componentDidMount() {
    const ref = firebase.firestore().collection('users').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const user = doc.data();
        this.setState({
          key: doc.id,
          userID: user.userID,
          userName: user.userName,
          nic: user.nic,
          email: user.email,
          phoneNumber: user.phoneNumber,
          address: user.address,
          dob: user.dob,
          jobTitle: user.jobTitle,
          qcs: user.qcs,
          hs: user.hs,
          doct: user.doct,
          admin: user.admin,
          healthOfficial: user.healthOfficial,
          count: user.count
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nic, userID, userName, email, jobTitle, address, phoneNumber, dob, qcs, hs, doct, admin, healthOfficial, count } = this.state;

    const updateRef = firebase.firestore().collection('users').doc(this.state.key);
    updateRef.set({
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
      count
    }).then((docRef) => {
      this.setState({
        key: '',
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
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  userList(){

    this.props.history.push('/');
  }

  render() {
    return (

      <>
            {/*<div>
            <NavBar/>
        </div>*/}


      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <Typography variant="h3" style={style}>
              EDIT USER
            </Typography>
          </div>
          <div class="panel-body">

            

          <Button variant="contained" color="primary" onClick={() => this.userList()}>
                    Admin User Management
          </Button>
            
            <form onSubmit={this.onSubmit}>
            
             
                  <TextField type="text" placeholder="User Name" fullWidth margin="normal" name="userName" value={this.state.userName} onChange={this.onChange}/>
                  
          
                  <TextField type="text" placeholder="NIC" fullWidth margin="normal" name="nic" value={this.state.nic} onChange={this.onChange}/>
          
            
                  <TextField type="text" placeholder="Email" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>
          
          
                  <TextField type="text" placeholder="Phone Number" fullWidth margin="normal" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange}/>


                  <TextField type="text" placeholder="Address" fullWidth margin="normal" name="address" value={this.state.address} onChange={this.onChange}/>


                  <TextField type="text" placeholder="Date of Birth" fullWidth margin="normal" name="dob" value={this.state.dob} onChange={this.onChange}/>


                  <TextField type="text" placeholder="Job Title" fullWidth margin="normal" name="jobTitle" value={this.state.jobTitle} onChange={this.onChange}/>
            
            
              <Button type="submit" variant="contained" color="primary"  startIcon={<SaveIcon />} onClick={this.savecenter}>Save</Button>
              
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

export default Edit;