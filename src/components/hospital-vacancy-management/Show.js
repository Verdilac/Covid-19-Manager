import React, { Component } from 'react';
import firebase from '../TravelFunction/Firebase';
//import { Link } from 'react-router-dom';
//import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from '../hospital-vacancy-management/Scorecards/Title';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hospital: {},
      key: '',

      hospital_beds: []
    };
  }

  componentDidMount() {

    console.log(this.props.match.params.id);

    const ref = firebase.firestore().collection('hospitals').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          hospital: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });

    this.ref2 = firebase.firestore().collection('hospital_beds').orderBy('HBID');
    this.unsubscribe = this.ref2.onSnapshot(this.onCollectionUpdate);
  }

  onCollectionUpdate = (querySnapshot) => {    
   
    const hospital_beds = [];
    querySnapshot.forEach((doc2) => {
      const { HBID, HID, patientID, patientName } = doc2.data();
      hospital_beds.push({
        key: doc2.id,
        doc2, // DocumentSnapshot
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


  delete(id){
    firebase.firestore().collection('hospitals').doc(id).delete().then(() => {
      console.log("Record successfully deleted!");
      window.location.href=`/vacancy`;
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  deleteb(id){

    console.log(id);

    firebase.firestore().collection('hospital_beds').doc(id).delete().then(() => {
      console.log("Record successfully deleted!");
      
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <>

      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">

            <Box pt={0} marginTop={5} marginBottom={5}>  
              <Typography  variant="h3" style={style4}>{this.state.hospital.hospital_name} </Typography>
            </Box>
            
            <Box pt={0} marginTop={3} marginBottom={5}>  
              <Button variant="contained" color="primary" onClick={event => window.location.href=`/vacancy`}>
                      List of Hospitals
              </Button>
            </Box>

          </div>
          
          <div class="panel panel-default" style={style}>
      
          <form style={formContainer} >

            <Table>
                <TableHead >
                            <TableRow>
                                <TableCell align="left"><Typography variant="h6">HID</Typography></TableCell>
                                <TableCell align="Left"><Typography variant="h6">Hospital Name</Typography></TableCell>
                                <TableCell align="Left"><Typography variant="h6">District</Typography></TableCell>
                                <TableCell align="Left"><Typography variant="h6">COVID-19 Treatment Wards</Typography></TableCell>
                                <TableCell align="Left"><Typography variant="h6">Total Beds</Typography></TableCell>
                                <TableCell align="Left"><Typography variant="h6">Total ICU Beds</Typography></TableCell>
                                <TableCell align="Left"><Typography variant="h6">Actions</Typography></TableCell>
                                <TableCell align="Left"></TableCell>
                          
                            </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow  >

                        <TableCell align="Left"><Typography variant="h6">{this.state.hospital.hospital_ID}</Typography></TableCell>

                        <TableCell align="Left"><Typography variant="h6">{this.state.hospital.hospital_name}</Typography></TableCell>

                        <TableCell align="Left"><Typography variant="h6">{this.state.hospital.district}</Typography></TableCell>

                        <TableCell align="Right"><Typography variant="h6">{this.state.hospital.treatment_wards}</Typography></TableCell>

                        <TableCell align="Right"><Typography variant="h6">{this.state.hospital.total_beds}</Typography></TableCell>

                        <TableCell align="Right"><Typography variant="h6">{this.state.hospital.total_icu_beds}</Typography></TableCell>

                        <TableCell align="Left">
                          <Button variant="contained"  color="primary"  startIcon={<EditIcon />} onClick={event =>  window.location.href=`/HEdit/${this.state.key}`} >
                                            Edit
                          </Button>
                       </TableCell>

                        <TableCell align="Left">
                          <Button variant="contained" color="secondary"  startIcon={<DeleteIcon />}  onClick={this.delete.bind(this, this.state.key)} > 
                                Delete
                          </Button>
                        </TableCell>
                  </TableRow >
                </TableBody>
          </Table>
          </form>

          </div>          

          <Box pt={0} marginTop={15} marginBottom={1}>  
          <Typography  variant="h4" style={style4}>Hospital Beds in {this.state.hospital.hospital_name} </Typography>
          </Box>

          <Box pt={0} marginTop={1} marginBottom={5}>  
              <Button variant="contained" startIcon={<AddCircleOutlineIcon />} color="primary" onClick={event => window.location.href=`/HBCreate`}>
                      Add Bed
              </Button>
          </Box>

        {/*<Container  style={style2} > 
          <Container component={Paper}  >*/}

                <Table >

                    <TableHead >

                        <TableRow align="Left">
                        
                            <TableCell align="Left"><Typography variant="h6"> Hospital Bed ID</Typography> </TableCell> 
                            <TableCell align="Left"><Typography variant="h6"> Hospital ID </Typography> </TableCell>
                            <TableCell align="Left"><Typography variant="h6"> Patient ID </Typography> </TableCell>
                            <TableCell align="Left"><Typography variant="h6"> Patient Name </Typography> </TableCell>
                            <TableCell align="Left"><Typography variant="h6"> Actions </Typography> </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>
                                                {this.state.hospital_beds.map(row =>(

                                                this.state.hospital.hospital_ID === row.HID ? (
                                                
                                                  
                                                <TableRow key={row.id}  >

                                                      <TableCell align="Left"> <Typography variant="h6">{row.HBID}</Typography></TableCell>    
                                                        
                                                      <TableCell align="Left"> <Typography variant="h6">{row.HID}</Typography> </TableCell>

                                                      <TableCell align="Left"> <Typography variant="h6">{row.patientID}</Typography> </TableCell>

                                                      <TableCell align="Left"> <Typography variant="h6">{row.patientName}</Typography> </TableCell>

                                                      <TableCell align="Left">
                                                        <Button variant="contained" color="secondary"  startIcon={<DeleteIcon />}  onClick={this.deleteb.bind(this, row.key)} > 
                                                              Delete
                                                        </Button>
                                                      </TableCell>

                                               </TableRow>

                                                 
                                                  
                                                ):null

                                                ))}

                    </TableBody>

                </Table>
              {/*</Container>    
        </Container>*/}
        <Box pt={5}></Box>

        </div>
      </div>
     </> 
    );
  }
}
const style ={
  display: 'flex',
  justifyContent: 'left'
  
}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
};

const style2 ={


  height: '200px',


}

const style3 ={

  color: '#3e54af',
  height: '60px',

}

const style4 ={
  color: '#3e54af',
  height: '80px',
  display: 'flex',
  justifyContent: 'center'
  
}

export default Show;
