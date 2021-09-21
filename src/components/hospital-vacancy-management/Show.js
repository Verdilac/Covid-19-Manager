import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import EditIcon from '@material-ui/icons/Edit';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hospital: {},
      key: ''
    };
  }

  componentDidMount() {
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
  }

  delete(id){
    firebase.firestore().collection('hospitals').doc(id).delete().then(() => {
      console.log("Record successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

hospital_list(){

    this.props.history.push('/');
}


  render() {
    return (
      <>

        <div>
            <NavBar/>
        </div>

      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">

          
            <Typography variant="h4" style={style}>
              {this.state.hospital.hospitalname}
            </Typography>

            
            <div style={{ padding: 20 }}>
            <Button variant="contained" color="primary" onClick={() => this.hospital_list()}>
                    List of Hospitals
                </Button>
            </div>

          </div>
          
          <div class="panel-body" style={style}>
      
            <form style={formContainer} >

            <Table>
                <TableHead >
                            <TableRow>
                                <TableCell align="left">HID</TableCell>
                                <TableCell align="Left">Hospital Name</TableCell>
                                <TableCell align="Left">District</TableCell>
                                <TableCell align="Left">COVID-19 Treatment Wards</TableCell>
                                <TableCell align="Left">Total Beds</TableCell>
                                <TableCell align="Left">Total ICU Beds</TableCell>
                                <TableCell align="Left">Actions</TableCell>
                                <TableCell align="Left"></TableCell>
                          
                            </TableRow>
                </TableHead>
                <TableBody>
            <TableRow  >

                        <TableCell align="Left">{this.state.hospital.hospital_ID}</TableCell>

                        <TableCell align="Left">{this.state.hospital.hospital_name}</TableCell>

                        <TableCell align="Left">{this.state.hospital.district}</TableCell>

                        <TableCell align="Right">{this.state.hospital.treatment_wards}</TableCell>

                        <TableCell align="Right">{this.state.hospital.total_beds}</TableCell>

                        <TableCell align="Right">{this.state.hospital.total_icu_beds}</TableCell>

                        <TableCell align="Left">
                          
                          <Button variant="contained"  color="primary"  startIcon={<EditIcon />} onClick={event =>  window.location.href=`/edit/${this.state.key}`} >
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
          


        </div>
      </div>
     </> 
    );
  }
}
const style ={
  display: 'flex',
  justifyContent: 'center'
  
}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
};

export default Show;
