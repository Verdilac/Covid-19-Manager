import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';
import NavBar from "./components/Navbar";
import Container from '@material-ui/core/Container';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('centers');
    this.unsubscribe = null;
    this.state = {
      centers: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const centers = [];
    querySnapshot.forEach((doc) => {
      const { centername, district, qi, capacity } = doc.data();
      centers.push({
        key: doc.id,
        doc, // DocumentSnapshot
        centername,
        district,
        qi,
        capacity,
      });
    });
    this.setState({
      centers
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  raddcenter(){
    this.props.history.push('/Create');
  }

  render() {
    return (
    <div>
             <NavBar/>
             
                <Typography variant="h4" style={style}>Quarantine Centers</Typography>
              
                <Button variant="contained" color="primary" onClick={() => this.raddcenter()}>
                     Add Center
                </Button>


                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="Left">Center Name</TableCell>
                            <TableCell align="Left">District</TableCell>
                            <TableCell align="Left">Quarantined Individuals</TableCell>
                            <TableCell align="Left">Capacity</TableCell>
                      
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      
                        {this.state.centers.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                
                                <TableCell align="Left">
                                  
                                <Button variant="contained"  color="primary" onClick={event =>  window.location.href=`/show/${row.key}`}>{row.centername}
                                        
                                </Button>

                                </TableCell>
                                
                                 <TableCell align="Left">{row.district}</TableCell>
                                <TableCell align="Left">{row.qi}</TableCell>
                                <TableCell align="Left">{row.capacity}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
    );
  }
}
const style ={
  display: 'flex',
  justifyContent: 'center'
}

export default App;
