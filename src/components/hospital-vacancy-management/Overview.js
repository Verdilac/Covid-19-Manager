import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../../App.css';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import firebase from '../TravelFunction/Firebase';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
//import CreateIcon from '@material-ui/icons/Create';
//import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ScoreCard1 from './Scorecards/ScoreCard1';
import ScoreCard2 from './Scorecards/ScoreCard2';
import ScoreCard3 from './Scorecards/ScoreCard3';
import ScoreCard4 from './Scorecards/ScoreCard4';
import ScoreCard5 from './Scorecards/ScoreCard5';
import ScoreCard6 from './Scorecards/ScoreCard6';

//import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const Styles = {

    container: {
      paddingTop: 4,
      paddingBottom: 4,
    },
    paper: {
      padding: 2,
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 120,
    },
    fixedHeightChart: {
      height: 360,
    },
  };


class Overview extends Component { 
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('hospitals').orderBy('hospital_ID');
    this.unsubscribe = null;
    this.state = {
      hospitals: [],
      centers: [],
      hospital_beds: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const hospitals = [];
    querySnapshot.forEach((doc) => {
      const { hospital_ID, hospital_name, district, treatment_wards, total_beds, total_icu_beds } = doc.data();
      hospitals.push({
        key: doc.id,
        doc, // DocumentSnapshot
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

  //Pull Data from QCM
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
        capacity
      });
    });
    this.setState({
      centers
   });

  }

  //Pull Data from Hospital Beds
  onCollectionUpdate3 = (querySnapshot) => {

    const hospital_beds = [];
    querySnapshot.forEach((doc3) => {
      const { HBID, HID, patientID, patientName } = doc3.data();
      hospital_beds.push({
        key: doc3.id,
        doc3, // DocumentSnapshot
        HBID, 
        HID, 
        patientID, 
        patientName 
      });
    });
    this.setState({
      hospital_beds
   });

  }

  componentDidMount() {
    this.ref2 = firebase.firestore().collection('centers').orderBy('qcid');
    this.ref3 = firebase.firestore().collection('hospital_beds').orderBy('HBID');
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.unsubscribe = this.ref2.onSnapshot(this.onCollectionUpdate2);
    this.unsubscribe = this.ref3.onSnapshot(this.onCollectionUpdate3);
  }

  render() {
    
    const classes = withStyles(Styles);
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    const total_treatment_wards =(this.state.hospitals.reduce((total,currentItem) =>  total = total+= parseInt(currentItem.treatment_wards) , 0 ));
    const total_beds =(this.state.hospitals.reduce((total,currentItem) =>  total = total+= parseInt(currentItem.total_beds) , 0 ));
    const total_icu_beds =(this.state.hospitals.reduce((total,currentItem) =>  total = total+= parseInt(currentItem.total_icu_beds) , 0 ));
    const total_hospitals = this.state.hospitals.reduce((count, currentItem) => (currentItem.hospital_ID === currentItem.hospital_ID ? count + 1 : count), 0);

    //Occupied Beds
    var occupiedBeds=(this.state.hospital_beds.reduce((total,currentItem) =>  total = total+=  (currentItem.HBID ), '' ));
    var totalHBint = occupiedBeds.length / 6;

    //Total QCs
    var totalqi=(this.state.centers.reduce((total,currentItem) =>  total = total+=  (currentItem.qcid ), '' ));
    var totalqiINT = totalqi.length / 6;

    return (
    <div>

             <div style={{ padding: 50 }}>

             <Container maxWidth="false" className={classes.container}>
                <Grid container spacing={3}>
            
                    <Grid item xs>
                    <Paper className={fixedHeightPaper}>
                        <ScoreCard4/> <Typography component="p" variant="h4" align="center">  {total_hospitals}  </Typography>
                    </Paper>
                    </Grid>
                    
                    <Grid item xs>
                    <Paper className={fixedHeightPaper}>
                        <ScoreCard5/> <Typography component="p" variant="h4" align="center">  {totalqiINT}  </Typography>
                    </Paper>
                    </Grid>

                    <Grid item xs>
                    <Paper className={fixedHeightPaper}>
                        <ScoreCard1/> <Typography component="p" variant="h4" align="center" >  {total_treatment_wards}  </Typography>
                    </Paper>
                    </Grid>

                    <Grid item xs>
                    <Paper className={fixedHeightPaper}>
                        <ScoreCard6/> <Typography component="p" variant="h4" align="center">  {totalHBint}  </Typography>
                    </Paper>
                    </Grid>

                    <Grid item xs>
                    <Paper className={fixedHeightPaper}>
                        <ScoreCard2/> <Typography component="p" variant="h4" align="center">  {total_beds}  </Typography>
                    </Paper>
                    </Grid>

                    <Grid item xs>
                    <Paper className={fixedHeightPaper}>
                        <ScoreCard3/> <Typography component="p" variant="h4" align="center">  {total_icu_beds}  </Typography>
                    </Paper>
                    </Grid>

                    


                </Grid>
            </Container>

            </div>

              <Container maxWidth="lg">

                <div style={{ padding: 20 }}>
                <Typography variant="h5" style={style}>List of Hospitals</Typography>
                </div>


                <div style={{ padding: 20 }}>

                <Grid container justify="flex-end">

                <Button variant="contained" startIcon={<AddCircleOutlineIcon />} color="primary" onClick={event =>  window.location.href=`/HCreate`}>
                     Add Hospital
                </Button>

                </Grid>
                </div>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h6">Hospital ID</Typography></TableCell>
                            <TableCell align="Left"><Typography variant="h6">Hospital Name</Typography></TableCell>
                            <TableCell align="Left"><Typography variant="h6">District</Typography></TableCell>
                            <TableCell align="Right"><Typography variant="h6">Treatment Wards</Typography></TableCell>
                            <TableCell align="Right"><Typography variant="h6">Total Beds</Typography></TableCell>
                            <TableCell align="Right"><Typography variant="h6">Total ICU Beds</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        {this.state.hospitals.map(row => (
                            <TableRow key={row.id}>

                                <TableCell align="Left"><Typography variant="h6">{row.hospital_ID}</Typography></TableCell>
                                
                                <TableCell align="Left">
                                <Button variant="contained"  color="primary" onClick={event =>  window.location.href=`/HShow/${row.key}`} >{row.hospital_name}
                                        
                                </Button>
                                

                                </TableCell>
                                
                                <TableCell align="Left"><Typography variant="h6">{row.district}</Typography></TableCell>
                                <TableCell align="Right"><Typography variant="h6">{row.treatment_wards}</Typography></TableCell>
                                <TableCell align="Right"><Typography variant="h6">{row.total_beds}</Typography></TableCell>
                                <TableCell align="Right"><Typography variant="h6">{row.total_icu_beds}</Typography></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

              </Container>
              <Box pt={5}></Box>
            </div>
    );
  }
}
const style ={
  display: 'flex',
  justifyContent: 'center'
}

export default Overview;