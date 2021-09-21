import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import '../App.css';
import firebase from '../Firebase';
import NavBar from "../components/Navbar";
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



class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('users').orderBy('count', "desc");
   
    this.unsubscribe = null;
    this.state = {
      users: []
    };
   
  }

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


  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }



  render() {
           
              var totalUsers=(this.state.users.reduce((total,currentItem) =>  total = total+= currentItem.userID , 0 ));
              var userCount = totalUsers.length 
              userCount = (userCount / 9).toFixed(0);

              const totalHO=(this.state.users.reduce((total,currentItem) =>  total = total+= parseInt(currentItem.healthOfficial) , 0 ));
              
             
    return (
    <div>
             <NavBar/>
        
                         
             <Typography variant="h3" color= "#3e54af"style={style}>Admin User Management</Typography>
                          <Container style={style2}>
                                  <Container  align= "center" justifyContent = "center"  >
                        
                                                <Grid container lg={12} spacing={4}  >

                                                        <Grid item xs={12} md={5} lg={4} >
                                                          <Paper >
                                                            <ScoreCard/>   <Typography component="p" variant="h4">  {userCount}  </Typography>
                                                          </Paper>
                                                        </Grid>

                                                        <Grid item xs={12} md={5} lg={4}>
                                                          <Paper>
                                                            <ScoreCard2/>  <Typography component="p" variant="h4"> {totalHO}  </Typography>
                                                          </Paper>
                                                        </Grid>
                                                
                                                        <Grid item xs={12} md={5} lg={4}>
                                                          <Paper>
                                                            <ScoreCard3/>   <Typography component="p" variant="h4"> {totalHO}% 	</Typography>
                                                          </Paper>
                                                        </Grid>
                                                
                                               
                                                </Grid>
                                    </Container>
                          </Container>

       <Container style ={style}>                   
          <Container align= "left" className="w-100 p-2">

                <Button  variant="contained" color="primary" onClick={event =>  window.location.href=`/create`}>
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
                                  
                                <Button variant="contained"  color="secondary" onClick={event =>  window.location.href=`/show/${row.key}`}>{row.userName}
                                        
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
