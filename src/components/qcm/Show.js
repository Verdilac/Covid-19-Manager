import React, { Component } from 'react';
import firebase from '../TravelFunction/Firebase';

//import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

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
//import { TableContainer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Title from './Dashboard/Title';
import Container from '@material-ui/core/Container';
//import listQindividuals from './listQindividuals';




class Show extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      center: {},
      key: '',

      
      qindividuals: []
    };
  }

  componentDidMount() {

   
    console.log(this.props.match.params.id);


    const ref = firebase.firestore().collection('centers').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          center: doc.data(),
          key: doc.id,
          isLoading: false
        
        });
      } else {
        console.log("No such document!");
      }
    });

    console.log();
    

    this.ref2 = firebase.firestore().collection('qindividuals');
    this.unsubscribe = this.ref2.onSnapshot(this.onCollectionUpdate); 
    
   
  }

  onCollectionUpdate = (querySnapshot) => {    
   
    const qindividuals = [];
    querySnapshot.forEach((doc2) => {
      const { qcid, passportNo, name, phoneno, address, dob } = doc2.data();
      qindividuals.push({
        key: doc2.id,
        doc2, // DocumentSnapshot
        qcid,
        passportNo,
        name,
        phoneno,
        address,
        dob,
      });
    });
    this.setState({
      qindividuals
   });

  }

  
  discharge(id){

    firebase.firestore().collection('qindividuals').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });       

  }

  transfer(){


  }  

  delete(id){
    firebase.firestore().collection('centers').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
     // this.props.history.push("/")
     window.location.href=`/quarantine`
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });                                            
  }

qclist(){

    this.props.history.push('/quarantine');
}

  render() {

    var totalqi=(this.state.qindividuals.filter(({qcid}) => qcid === this.state.center.qcid).reduce((total,currentItem) =>  total = total+=  (currentItem.qcid ), '' ));
    var totalqiINT = totalqi.length / 6;
  
    return (
      <>

  
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">

          <Container style= {style3}>
            <Typography variant="h3" style={style}>
              {this.state.center.centername}
            </Typography>
          
            </Container>

              <Container style= {style3}>     
                    <Container align= "left" className="w-100 p-2">
                    <Button variant="contained" color="primary" onClick={event =>  window.location.href=`/quarantine`}>
                            Quarantine Center Management Dashboard
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
                                                      <TableCell> <Title> QCID </Title> </TableCell>
                                        
                                                      <TableCell align="Left"> <Title> District </Title> </TableCell>
                                                      <TableCell align="Left"> <Title> Quarantined Individuals </Title> </TableCell>
                                                      <TableCell align="Left"> <Title> Capacity </Title> </TableCell>
                                                      <TableCell align="right"> </TableCell>
                                                      <TableCell align="Left"></TableCell>
                                                
                                                  </TableRow>
                                      </TableHead>
                                      <TableBody>
                                  <TableRow  >


                                              <TableCell > <Typography variant="h6" id="centerID">{this.state.center.qcid}</Typography> </TableCell>

                                              <TableCell align="Left"> <Typography variant="h6">  {this.state.center.district} </Typography> </TableCell>
                      
                                              <TableCell align="Left"> <Typography variant="h6">{totalqiINT}  </Typography></TableCell>
                          
                                              <TableCell align="Left"> <Typography variant="h6">  {this.state.center.capacity} </Typography> </TableCell>

                                              <TableCell align="right">
                                                
                                                <Button variant="contained"  color="primary"  startIcon={<EditIcon />} onClick={event =>  window.location.href=`/QEdit/${this.state.key}`} >
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

        <Container >
          <Typography  variant="h3" style={style4}>Quarantined Individuals in {this.state.center.centername} </Typography>
        </Container>

        <Container  style={style2} > 
          <Container component={Paper}  >

                <Table >

                    <TableHead >

                        <TableRow align="Left">
                        
                            <TableCell align="Left"> <Title> Passport Number</Title></TableCell> 
                            <TableCell align="Left"> <Title> Name </Title> </TableCell>
                            <TableCell align="Left"> <Title> Phone Number </Title> </TableCell>
                            <TableCell align="Left"> <Title> DOB </Title> </TableCell>
                            <TableCell align="Left"> <Title> Address </Title> </TableCell>
                            <TableCell align="Left"> <Title></Title> </TableCell>
                            <TableCell align="Left"> <Title></Title> </TableCell>
                       
                        </TableRow>

                    </TableHead>

                    <TableBody>
                                                {this.state.qindividuals.map(row =>(

                                                this.state.center.qcid === row.qcid ? (
                                                
                                                  
                                                <TableRow key={row.id}  >

                                                      <TableCell > <Typography variant="h6"></Typography>{row.passportNo}</TableCell>    
                                                        
                                                      <TableCell > <Typography variant="h6">{row.name}</Typography> </TableCell>

                                                      <TableCell > <Typography variant="h6">{row.phoneno}</Typography> </TableCell>

                                                      <TableCell > <Typography variant="h6">{row.dob}</Typography> </TableCell>

                                                      <TableCell > <Typography variant="h6">{row.address}</Typography> </TableCell>
                                                    
                                              
                                                <TableCell align="right">


                                                <Button variant="contained" color="primary"   onClick={this.discharge.bind(this, this.state.key)}> 
                                                    Discharge
                                               </Button>

                                                </TableCell>

                                               <TableCell>

                                               <Button variant="contained" color="secondary"  onClick={this.transfer.bind(this, this.state.key)} > 
                                                    Transfer
                                               </Button>

                                               </TableCell>

                                              
                                               </TableRow>

                                                 
                                                  
                                                ):null

                                                ))}

                    </TableBody>

                </Table>
              </Container>    
        </Container>

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
