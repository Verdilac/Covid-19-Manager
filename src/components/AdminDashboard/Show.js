import React, { Component } from 'react';
import firebase from '../TravelFunction/Firebase';
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
import { TableContainer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Title from './Dashboard/Title';
import Container from '@material-ui/core/Container';



class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('users').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          user: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('users').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      window.location.href=`/adminDashboard`
    }).catch((error) => {
      console.error("Error removing document: ", error);
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

          <Container style= {style3}>
            <Typography variant="h3" style={style}>
              {this.state.user.userName}
            </Typography>

            
            </Container>

              <Container style= {style3}>     
                    <Container align= "left" className="w-100 p-2">
                    <Button variant="contained" color="primary" onClick={event => window.location.href=`/adminDashboard`}>
                            Admin Dashboard
                        </Button>
                  </Container>
        </Container>


          </div>
          
          <div class="panel-body" >
                            <Container  style={style2} > 
                                <Container component={Paper} maxWidth="lg">

                                  <form style={formContainer} >
                                
                                  <Table>
                                      <TableHead >
                                                  <TableRow>
                                                      <TableCell> <Title> User ID </Title> </TableCell>
                                        
                                                      <TableCell align="Left"> <Title> Full Name </Title> </TableCell>
                                                      <TableCell align="Left"> <Title> NIC </Title> </TableCell>
                                                      <TableCell align="Left"> <Title> Email </Title> </TableCell>
                                                      <TableCell align="Left"> <Title> Phone Number </Title> </TableCell>
                                                      <TableCell align="Left"> <Title> Address </Title> </TableCell>
                                                      <TableCell align="Left"> <Title> D.O.B </Title> </TableCell>                                                      
                                                      <TableCell align="Left"> <Title> Job Titile </Title> </TableCell>                                                      
                                                      <TableCell align="Left"> <Title> Actions </Title> </TableCell>
                                                      <TableCell align="Left"></TableCell>
                                                
                                                  </TableRow>
                                      </TableHead>
                                      <TableBody>
                                  <TableRow  >


                                              <TableCell > <Typography variant="h6">{this.state.user.userID} </Typography> </TableCell>

                                            

                                              <TableCell align="Left"> <Typography variant="h6">  {this.state.user.userName} </Typography> </TableCell>
                        

                                              <TableCell align="Left"> <Typography variant="h6">  {this.state.user.nic} </Typography> </TableCell>
                          

                                              <TableCell align="Left"> <Typography variant="h6">  {this.state.user.email} </Typography> </TableCell>


                                              <TableCell align="Left"> <Typography variant="h6">  {this.state.user.phoneNumber} </Typography> </TableCell>


                                              <TableCell align="Left"> <Typography variant="h6">  {this.state.user.address} </Typography> </TableCell>


                                              <TableCell align="Left"> <Typography variant="h6">  {this.state.user.dob} </Typography> </TableCell>

                                              
                                              <TableCell align="Left"> <Typography variant="h6">  {this.state.user.jobTitle} </Typography> </TableCell>

                                              <TableCell align="right">
                                                
                                                <Button variant="contained"  color="primary"  startIcon={<EditIcon />} onClick={event =>  window.location.href=`/AdminEdit/${this.state.key}`} >
                                                                  Edit
                                                </Button>
                                                
                                            </TableCell>

                                          
                                              <TableCell >

                                              <Button variant="contained" color="secondary"  startIcon={<DeleteIcon />}  onClick={this.delete.bind(this, this.state.key)} > 
                                                    Delete
                                              </Button>

                                              </TableCell>
                                  </TableRow >
                                </TableBody>
                                </Table>
                                
                            </form>
                            </Container>
              </Container>
          </div>

        

        </div>
      </div>
     </> 
    );
  }
}
const style ={

  height: '80',
  display: 'flex',
  justifyContent: 'center'
  
}

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

const formContainer = {
  
  display: 'flex',
  flexFlow: 'row wrap'
};

export default Show;
