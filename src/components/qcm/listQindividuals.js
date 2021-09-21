import React, { Component } from 'react';


import firebase from '../../Firebase';

import Container from '@material-ui/core/Container';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { TableContainer } from '@material-ui/core';
import Title from './Dashboard/Title';




class listQindividuals extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('qindividuals').orderBy('qcid');
   
    this.unsubscribe = null;
    this.state = {
        qindividuals: []
    };
   
  }

  onCollectionUpdate = (querySnapshot) => {
    const qindividuals = [];
    querySnapshot.forEach((doc) => {
      const { qcid, name, dob, phoneno, address } = doc.data();
      qindividuals.push({
        key: doc.id,
        doc, // DocumentSnapshot
        qcid,
        name,
        dob,
        phoneno,
        address,
       
      });
    });
    this.setState({
      qindividuals
   });

  }


  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }



  render() {
           
    return (
    <div>

                <Container component={Paper} maxWidth="lg" >

                <Table >
                    <TableHead>
                        <TableRow>
                        
                            <TableCell> <Title>  QCID   </Title></TableCell> 
                            <TableCell align="Left"> <Title> Name </Title> </TableCell>
                            <TableCell align="Left"> <Title> DOB </Title> </TableCell>
                            <TableCell align="Left"> <Title> Phone Num </Title> </TableCell>
                            <TableCell align="Left"> <Title> Address </Title> </TableCell>
                       
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        {this.state.centers.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                <Typography variant="h6">{row.qcid} </Typography>
                                </TableCell>
                                
                            
                                  
                                <TableCell align="Left"> <Typography variant="h6">  {row.name}  </Typography>
                                        
                              

                                </TableCell>
                                
                                 <TableCell align="Left"> <Typography variant="h6"> {row.dob} </Typography> </TableCell>
                                <TableCell align="Left"> <Typography variant="h6"> {row.phoneno} </Typography> </TableCell>

                                 
                                <TableCell align="Left"> <Typography variant="h6"> {row.address} </Typography> </TableCell>

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



export default listQindividuals;
