import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import '../../App.css';
import firebase from '../TravelFunction/Firebase';
import NavBar from "../AdminDashboard/Navbar";
import Container from '@material-ui/core/Container';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ScoreCard from './Dashboard/ScoreCard';
import ScoreCard2 from './Dashboard/ScoreCard2';
import ScoreCard3 from './Dashboard/ScoreCard3';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { TableContainer } from '@material-ui/core';
import Title from './Dashboard/Title';
import { spacing } from '@material-ui/system';
import { positions } from '@material-ui/system';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users').orderBy('count', "desc");
   
    this.unsubscribe = null;
    this.state = {
      users: [],
      centers: [],
      hospitals: []
    };
   
  }

  
  //get data from users table
  onCollectionUpdate = (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      const { userID, userName, nic, email, phoneNumber, address, dob, jobTitle,healthOfficial } = doc.data();
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        userID,
        userName,
        nic,
        email,
        phoneNumber,
        address,
        dob,
        jobTitle,
        healthOfficial,
      });
    });
    this.setState({
      users
   });

  }


  //get data from charukas centers table
  onCollectionUpdate2 = (querySnapshot) => {

    const centers = [];
    querySnapshot.forEach((doc2) => {
      const { qcid, centername, district, capacity } = doc2.data();
      centers.push({
        key: doc2.id,
        doc2, // DocumentSnapshot
        qcid,
        centername,
        district,
   
        capacity,
      });
    });
    this.setState({
      centers
   });

  }

  //get data from tivains hospitals table
  onCollectionUpdate3 = (querySnapshot) => {
    const hospitals = [];
    querySnapshot.forEach((doc3) => {
      const { hospital_ID, hospital_name, district, treatment_wards, total_beds, total_icu_beds } = doc3.data();
      hospitals.push({
        key: doc3.id,
        doc3, // DocumentSnapshot
        hospital_ID,
        hospital_name,
        district,
        treatment_wards,
        total_beds,
        total_icu_beds
      });
    });
    this.setState({
      hospitals
   });
  }

    

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.ref2 = firebase.firestore().collection('centers').orderBy('qcid');
    this.ref3 = firebase.firestore().collection('hospitals').orderBy('hospital_ID');
    this.unsubscribe = null;
    this.unsubscribe = this.ref2.onSnapshot(this.onCollectionUpdate2);
    this.unsubscribe = this.ref3.onSnapshot(this.onCollectionUpdate3);

  }



  render() {
              //user count card
              var totalUsers=(this.state.users.reduce((total,currentItem) =>  total = total+= currentItem.userID , 0 ));
              var userCount = totalUsers.length 
              userCount = (userCount / 9).toFixed(0);

              //total quarantine centers card
              var totalqi=(this.state.centers.reduce((total,currentItem) =>  total = total+=  (currentItem.qcid ), '' )); 
              var totalqiINT = totalqi.length / 6;

              //total Health officials card
              const totalHO=(this.state.users.reduce((total,currentItem) =>  total = total+= parseInt(currentItem.healthOfficial) , 0 ));

              //total registered hospitals
              const total_hospitals = this.state.hospitals.reduce((count, currentItem) => (currentItem.hospital_ID === currentItem.hospital_ID ? count + 1 : count), 0);
              
             
    return (
    <div>
        
                         
             <Typography variant="h3" color= "#3e54af"style={style}>Admin Dashboard</Typography>
                          <Container style={style2}>
                                  <Container  align= "center" justifyContent = "center"  >
                        
                                                <Grid container lg={12} spacing={4}  >

                                                        <Grid item xs={12} md={5} lg={4} >
                                                          <Paper >
                                                            <ScoreCard/>   <Typography component="p" variant="h4">  {totalqiINT}  </Typography>
                                                          </Paper>
                                                        </Grid>

                                                        <Grid item xs={12} md={5} lg={4}>
                                                          <Paper>
                                                            <ScoreCard2/>  <Typography component="p" variant="h4"> {totalHO}  </Typography>
                                                          </Paper>
                                                        </Grid>
                                                
                                                        <Grid item xs={12} md={5} lg={4}>
                                                          <Paper>
                                                            <ScoreCard3/>   <Typography component="p" variant="h4"> {total_hospitals} 	</Typography>
                                                          </Paper>
                                                        </Grid>
                                                
                                               
                                                </Grid>
                                    </Container>
                          </Container>

       <Container style ={style}>                   
          <Container align= "left" className="w-100 p-2">

                <Button  variant="contained" color="primary" onClick={event =>  window.location.href=`/AdminCreate`}>
                     Add New User
                </Button>

          </Container>
      </Container>
                <Container component={Paper} maxWidth="xl" >

                <Table >
                    <TableHead>
                        <TableRow>
                        
                            <TableCell> <Title>  User ID   </Title></TableCell> 
                            <TableCell align="Left"> <Title> Full Name </Title> </TableCell>
                            <TableCell align="Left"> <Title> NIC </Title> </TableCell>
                            <TableCell align="Left"> <Title> Email </Title> </TableCell>
                            <TableCell align="Left"> <Title> Phone Number </Title> </TableCell>
                            <TableCell align="Left"> <Title> Address </Title> </TableCell>
                            <TableCell align="Left"> <Title> D.O.B </Title> </TableCell>                                                      
                            <TableCell align="Left"> <Title> Job Titile </Title> </TableCell>
                       
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        {this.state.users.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                <Typography variant="h6">{row.userID} </Typography>
                                </TableCell>
                                
                                <TableCell align="Left">
                                  
                                <Button variant="contained"  color="secondary" onClick={event =>  window.location.href=`/AdminShow/${row.key}`}>{row.userName}
                                        
                                </Button>

                                </TableCell>
                                
                                 <TableCell align="Left"> <Typography variant="h6"> {row.nic} </Typography> </TableCell>
                                 <TableCell align="Left"> <Typography variant="h6"> {row.email} </Typography> </TableCell>
                                 <TableCell align="Left"> <Typography variant="h6"> {row.phoneNumber} </Typography> </TableCell>
                                 <TableCell align="Left"> <Typography variant="h6"> {row.address} </Typography> </TableCell>
                                 <TableCell align="Left"> <Typography variant="h6"> {row.dob} </Typography> </TableCell>
                                 <TableCell align="Left"> <Typography variant="h6"> {row.jobTitle} </Typography> </TableCell>
                                 
                                 
                                

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
              </Container>
            </div>
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


  height: '100px',


}



export default App;
