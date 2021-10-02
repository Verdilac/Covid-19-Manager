import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import {withRouter} from 'react-router-dom';

import firebase from '../TravelFunction/Firebase';
import NavBar from "./Navbar";
import Container from '@material-ui/core/Container';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ScoreCard from './Dashboard/ScoreCard';
import ScoreCard2 from './Dashboard/ScoreCard2';
import ScoreCard3 from './Dashboard/ScoreCard3';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
//import { TableContainer } from '@material-ui/core';
import Title from './Dashboard/Title';



class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('centers').orderBy('qcid');
   
   
    this.unsubscribe = null;
    this.state = {
      centers: [],

      qindividuals: []
    };
   
  }

  onCollectionUpdate = (querySnapshot) => {

    const centers = [];
    querySnapshot.forEach((doc) => {
      const { qcid, centername, district, capacity } = doc.data();
      centers.push({
        key: doc.id,
        doc, // DocumentSnapshot
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

  onCollectionUpdate2 =(querySnapshot) =>{

    const qindividuals = [];
    querySnapshot.forEach((doc2) => {
      const {qcid,name,dob,address,phoneno, passportNo} = doc2.data();
      qindividuals.push({
        key: doc2.id,
        doc2, // DocumentSnapshot
        qcid,
        name,
        dob,
        address,
        phoneno,
        passportNo,
       
      });
    });
    this.setState({
      qindividuals
   });




  } 


  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);


    this.ref2 = firebase.firestore().collection('qindividuals').orderBy('qcid');
    this.unsubscribe = null;
    this.unsubscribe = this.ref2.onSnapshot(this.onCollectionUpdate2);
    
  }



  render() {

             

              var totalqi=(this.state.qindividuals.reduce((total,currentItem) =>  total = total+=  (currentItem.qcid ), '' ));
              var totalqiINT = totalqi.length / 6;

              const totalcap=(this.state.centers.reduce((total,currentItem) =>  total = total+= parseInt(currentItem.capacity) , 0 ));
              var percent = (totalqiINT / totalcap * 100).toFixed(0); 
    return (
    <div>
        
        
                         
             <Typography variant="h3" color= "#3e54af"style={style}>Quarantine Center Management Dashboard</Typography>
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
                                                            <ScoreCard2/>  <Typography component="p" variant="h4"> {totalcap}  </Typography>
                                                          </Paper>
                                                        </Grid>
                                                
                                                        <Grid item xs={12} md={5} lg={4}>
                                                          <Paper>
                                                            <ScoreCard3/>   <Typography component="p" variant="h4"> {percent}% 	</Typography>
                                                          </Paper>
                                                        </Grid>
                                                
                                               
                                                </Grid>
                                    </Container>
                          </Container>

       <Container style ={style}>                   
          <Container align= "left" className="w-100 p-2">

                <Button  variant="contained" color="primary" onClick={event =>  window.location.href=`/quarantineCreate`}>
                     Add New Quarantine Center
                </Button>

          </Container>
      </Container>
                <Container component={Paper} maxWidth="lg" >

                <Table >
                    <TableHead>
                        <TableRow>
                        
                            <TableCell> <Title>  QCID   </Title></TableCell> 
                            <TableCell align="Left"> <Title> Center Name </Title> </TableCell>
                            <TableCell align="Left"> <Title> District </Title> </TableCell>
                            <TableCell align="Left"> <Title> Quarantined Individuals </Title> </TableCell>
                            <TableCell align="Left"> <Title> Capacity </Title> </TableCell>
                       
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        {this.state.centers.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                <Typography variant="h6">{row.qcid} </Typography>
                                </TableCell>
                                
                                <TableCell align="Left">
                                  
                                <Button variant="contained"  color="secondary" onClick={event =>  window.location.href=`/show/${row.key}`}>{row.centername}
                                        
                                </Button>

                                </TableCell>
                                
                                 <TableCell align="Left"> <Typography variant="h6"> {row.district} </Typography> </TableCell>
                                <TableCell align="Left"> <Typography variant="h6"> {row.qi} </Typography> </TableCell>

                                 
                                <TableCell align="Left"> <Typography variant="h6"> {row.capacity} </Typography> </TableCell>

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
