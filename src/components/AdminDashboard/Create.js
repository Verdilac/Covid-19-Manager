import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../TravelFunction/Firebase';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IDGenerator  from './IDgenerator';
import SaveIcon from '@material-ui/icons/Save';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Box from '@material-ui/core/Box';

//import { Container } from 'react-bootstrap';

class Create extends React.Component {

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
      window.location.href=`/adminDashboard`
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


  //Demo Button Health Official
  demo_button_HO = (e) => {
    e.preventDefault();
    
    this.state.count = parseInt(document.getElementById('IDcontext').textContent);
    this.state.userID = "OF" + document.getElementById('IDcontext').textContent;
    
    const { userID, count } = this.state;
    
    this.ref.add({
      nic:'978645524V',
      userID,
      userName:'John Doe',
      email:'johnDoe@gmail.com',
      jobTitle:'Government Health Official',
      address:'Ministry of Health, 385, Ven. Baddegama Wimalawansa Thero Mawatha, Colombo 10',
      phoneNumber:'0112675449',
      dob:'1985-07-07',
      //docID,
      //specialization,
      qcs:'0',
      hs:'0',
      doct:'0',
      admin:'0',
      healthOfficial:'1',
      count,
  }).then((docRef) => {
    this.setState({
      nic: '978645524V',
      userID: '',
      userName:'John Doe',
      email:'johnDoe@gmail.com',
      jobTitle:'Government Health Official',
      address:'Ministry of Health, 385, Ven. Baddegama Wimalawansa Thero Mawatha, Colombo 10',
      phoneNumber:'0112675449',
      dob:'1985-07-07',
      //docID,
      //specialization,
      qcs:'0',
      hs:'0',
      doct:'0',
      admin:'0',
      healthOfficial:'1',
      count:'',
    });
    window.location.href=`/adminDashboard`
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}


  //Demo Button Quarantine Center Staff
  demo_button_QCS = (e) => {
    e.preventDefault();
    
    this.state.count = parseInt(document.getElementById('IDcontext').textContent);
    this.state.userID = "QC" + document.getElementById('IDcontext').textContent;
    
    const { userID, count } = this.state;
    
    this.ref.add({
      nic:'978645520V',
      userID,
      userName:'Dishan Haru',
      email:'dilshanHaru@gmail.com',
      jobTitle:'Quarantine Center Staff',
      address:'464 T. B. Jayah Mawatha, Colombo 01000',
      phoneNumber:'0112675817',
      dob:'1985-03-07',
      //docID,
      //specialization,
      qcs:'1',
      hs:'0',
      doct:'0',
      admin:'0',
      healthOfficial:'0',
      count,
  }).then((docRef) => {
    this.setState({
      nic: '978645520V',
      userID: '',
      userName:'Dishan Haru',
      email:'dilshanHaru@gmail.com',
      jobTitle:'Quarantine Center Staff',
      address:'464 T. B. Jayah Mawatha, Colombo 01000',
      phoneNumber:'0112675817',
      dob:'1985-03-07',
      //docID,
      //specialization,
      qcs:'1',
      hs:'0',
      doct:'0',
      admin:'0',
      healthOfficial:'0',
      count:'',
    });
    window.location.href=`/adminDashboard`
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}

  //Demo Button Hospital Staff
  demo_button_HS = (e) => {
    e.preventDefault();
    
    this.state.count = parseInt(document.getElementById('IDcontext').textContent);
    this.state.userID = "HS" + document.getElementById('IDcontext').textContent;
    
    const { userID, count } = this.state;
    
    this.ref.add({
      nic:'978645521V',
      userID,
      userName:'Vindiw Diesel',
      email:'vinDie@gmail.com',
      jobTitle:'Hospital Staff',
      address:'Hospital Road, Sri Jayawardenepura Kotte',
      phoneNumber:'0112778610',
      dob:'1985-04-07',
      //docID,
      //specialization,
      qcs:'0',
      hs:'1',
      doct:'0',
      admin:'0',
      healthOfficial:'0',
      count,
  }).then((docRef) => {
    this.setState({
      nic: '978645521V',
      userID: '',
      userName:'Vindiw Diesel',
      email:'vinDie@gmail.com',
      jobTitle:'Hospital Staff',
      address:'Hospital Road, Sri Jayawardenepura Kotte',
      phoneNumber:'0112778610',
      dob:'1985-04-07',
      //docID,
      //specialization,
      qcs:'0',
      hs:'1',
      doct:'0',
      admin:'0',
      healthOfficial:'0',
      count:'',
    });
    window.location.href=`/adminDashboard`
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}

  //Demo Button Hospital Staff
  demo_button_DOCT = (e) => {
    e.preventDefault();
    
    this.state.count = parseInt(document.getElementById('IDcontext').textContent);
    this.state.userID = "DR" + document.getElementById('IDcontext').textContent;
    
    const { userID, count } = this.state;
    
    this.ref.add({
      nic:'978645522V',
      userID,
      userName:'Kevin De Silva',
      email:'kD@gmail.com',
      jobTitle:'Doctor',
      address:'114 Norris Canal Rd, Colombo 01000',
      phoneNumber:'0114665500',
      dob:'1985-04-07',
      //docID,
      //specialization,
      qcs:'0',
      hs:'0',
      doct:'1',
      admin:'0',
      healthOfficial:'0',
      count,
  }).then((docRef) => {
    this.setState({
      nic: '978645522V',
      userID: '',
      userName:'Kevin De Silva',
      email:'kD@gmail.com',
      jobTitle:'Doctor',
      address:'114 Norris Canal Rd, Colombo 01000',
      phoneNumber:'0114665500',
      dob:'1985-04-07',
      //docID,
      //specialization,
      qcs:'0',
      hs:'0',
      doct:'1',
      admin:'0',
      healthOfficial:'0',
      count:'',
    });
    window.location.href=`/adminDashboard`
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}

  //Demo Button Hospital Staff
  demo_button_ADMIN = (e) => {
    e.preventDefault();
    
    this.state.count = parseInt(document.getElementById('IDcontext').textContent);
    this.state.userID = "AD" + document.getElementById('IDcontext').textContent;
    
    const { userID, count } = this.state;
    
    this.ref.add({
      nic:'77777777v',
      userID,
      userName:'Ian De Mel',
      email:'ianD@gmail.com',
      jobTitle:'Sysytem Administrator',
      address:'1007 Mountain Drive, Gotham',
      phoneNumber:'77666777',
      dob:'1997-03-07',
      //docID,
      //specialization,
      qcs:'0',
      hs:'0',
      doct:'0',
      admin:'1',
      healthOfficial:'0',
      count,
  }).then((docRef) => {
    this.setState({
      nic: '77777777v',
      userID: '',
      userName:'Ian De Mel',
      email:'ianD@gmail.com',
      jobTitle:'Sysytem Administrator',
      address:'1007 Mountain Drive, Gotham',
      phoneNumber:'77666777',
      dob:'1997-03-07',
      //docID,
      //specialization,
      qcs:'0',
      hs:'0',
      doct:'0',
      admin:'1',
      healthOfficial:'0',
      count:'',
    });
    window.location.href=`/adminDashboard`
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

          <Typography variant="h3" style={style}>Add New User</Typography>   

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

                        <Box pt={2}> <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />} onClick={this.saveuser}>Save</Button> </Box>

                        <Box pt={2} marginX={2}> <Button type="submit" variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />} onClick={this.demo_button_QCS}>DEMO - ADD QUARANTINE CENTER STAFF USER</Button> </Box>

                        <Box pt={2} marginX={2}> <Button type="submit" variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />} onClick={this.demo_button_HS}>DEMO - ADD HOSPITAL STAFF USER</Button> </Box>

                        <Box pt={2} marginX={2}> <Button type="submit" variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />} onClick={this.demo_button_DOCT}>DEMO - ADD DOCTOR USER</Button> </Box>

                        <Box pt={2} marginX={2}> <Button type="submit" variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />} onClick={this.demo_button_ADMIN}>DEMO - ADD SYSTEM ADMINISTRATOR USER</Button> </Box>

                        <Box pt={2} marginX={2}> <Button type="submit" variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />} onClick={this.demo_button_HO}>DEMO - ADD HEALTH OFFICIAL USER</Button> </Box>

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
export default Create;