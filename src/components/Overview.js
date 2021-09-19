import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import firebase from '../Firebase';
import NavBar from "./Navbar";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ScoreCard1 from './Scorecards/ScoreCard1';
import ScoreCard2 from './Scorecards/ScoreCard2';
import ScoreCard3 from './Scorecards/ScoreCard3';
import ScoreCard4 from './Scorecards/ScoreCard4';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


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
      hospitals: []
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

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    
    const classes = withStyles(Styles);
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    const total_treatment_wards =(this.state.hospitals.reduce((total,currentItem) =>  total = total+= parseInt(currentItem.treatment_wards) , 0 ));
    const total_beds =(this.state.hospitals.reduce((total,currentItem) =>  total = total+= parseInt(currentItem.total_beds) , 0 ));
    const total_icu_beds =(this.state.hospitals.reduce((total,currentItem) =>  total = total+= parseInt(currentItem.total_icu_beds) , 0 ));
    const total_hospitals = this.state.hospitals.reduce((count, currentItem) => (currentItem.hospital_ID === currentItem.hospital_ID ? count + 1 : count), 0);

    return (
    <div>
             <NavBar/>

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
                        <ScoreCard1/> <Typography component="p" variant="h4" align="center" >  {total_treatment_wards}  </Typography>
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

                <Button variant="contained" startIcon={<AddCircleOutlineIcon />} color="primary" onClick={event =>  window.location.href=`/create`}>
                     Add Hospital
                </Button>

                </Grid>
                </div>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Hospital ID</b></TableCell>
                            <TableCell align="Left"><b>Hospital Name</b></TableCell>
                            <TableCell align="Left"><b>District</b></TableCell>
                            <TableCell align="Right"><b>Treatment Wards</b></TableCell>
                            <TableCell align="Right"><b>Total Beds</b></TableCell>
                            <TableCell align="Right"><b>Total ICU Beds</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        {this.state.hospitals.map(row => (
                            <TableRow key={row.id}>

                                <TableCell align="Left">{row.hospital_ID}</TableCell>
                                
                                <TableCell align="Left">
                                  
                                <Button variant="contained"  color="primary" onClick={event =>  window.location.href=`/show/${row.key}`}>{row.hospital_name}
                                        
                                </Button>

                                </TableCell>
                                
                                <TableCell align="Left">{row.district}</TableCell>
                                <TableCell align="Right">{row.treatment_wards}</TableCell>
                                <TableCell align="Right">{row.total_beds}</TableCell>
                                <TableCell align="Right">{row.total_icu_beds}</TableCell>

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
  display: 'flex',
  justifyContent: 'center'
}

export default Overview;