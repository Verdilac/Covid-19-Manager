import { useEffect, useState } from "react";
import firebase from './firebase';
import * as React from 'react';
import './DocTable.css';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Card, CardActionArea, makeStyles, Typography } from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Viewcard from '../Cards/Viewcard';
import TablePagination from '@material-ui/core/TablePagination';

import TableFooter from '@material-ui/core/TableFooter';
import Chart from '../BarChart/Chart';
import {AiOutlineUserAdd} from 'react-icons/ai'



const DocTable = () => {

    const [aFirstName, setaFirstName] = useState('');
    const [aLastName, setaLastName] = useState('');
    const [aEmail, setaEmail] = useState('');
    const [aAddress, setaAddress] = useState('');
    const [aPhone, setaPhone] = useState('');
    const [aGender, setaGender] = useState('');
    const [aSpecialization, setaSpecialization] = useState('');
    const [aPatientCount, setaPatientCount] = useState('');
    const [aUserName, setaUserName] = useState('');
    const [aPassword, setaPassword] = useState('');
   

    const handleAddUser = () => {
        const firestore = firebase.database().ref('/DoctorInfo');
        let data = {
            FirstName:aFirstName,
            LastName:aLastName,
            Email:aEmail,
            Address:aAddress,
            PhoneNumber:aPhone,
            Gender:aGender,
            Specialization:aSpecialization,
            PatientCount:aPatientCount,
            UserName:aUserName,
            Password:aPassword,
        }
        firestore.push(data);
    }
    

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    const [uFirstName, setuFirstName] = useState('');
    const [uLastName, setuLastName] = useState('');
    const [uEmail, setuEmail] = useState('');
    const [uStatus, setuStatus] = useState('');
    const [uPhone, setuPhone] = useState('');
    const [uSpecialization, setuSpecialization] = useState('');
    const [uPatientCount, setuPatientCount] = useState('');
    const [uUserName, setuUserName] = useState('');
    const [uPassword, setuPassword] = useState('');
    const [userID, setUserID] = useState('');

    const handleUpdateUser = () => {
        const firestore = firebase.database.ref('/DoctorInfo').child(userID);
        firestore.update({
            FirstName: uFirstName,
            LastName: uLastName,
            Email: uEmail,
            Status: uStatus,
            PhoneNumber: uPhone,
            Specialization: uSpecialization,
            PatientCount: uPatientCount,
            UserName: uUserName,
            Password: uPassword,
        })
        setuFirstName('');
        setuLastName('');
        setuEmail('');
        setuStatus('');
        setuPhone('');
        setuSpecialization('');
        setuPatientCount('');
        setuUserName('');
        setuPassword('');
    };
    
    // new one

    let history = useHistory();

    const [userData, setUserData] = useState([]);

    //importing data from database queries.
    useEffect(() => {
        const firestore = firebase.database().ref("/DoctorInfo");
        firestore.on("value", (response) =>{
            const data = response.val();
            let doctorInfo = [];
            for (let id in data ){
                doctorInfo.push({
                    id:id,
                    FirstName: data[id].FirstName,
                    LastName: data[id].LastName,
                    Email: data[id].Email,
                    Status: data[id].Status,
                    PhoneNumber: data[id].PhoneNumber,
                    Specialization: data[id].Specialization,
                    PatientCount: data[id].PatientCount,
                    UserName: data[id].UserName,
                    Password: data[id].Password,
                });
            }
            setUserData(doctorInfo);
        })
    });

    //update data in database

    const handleUpdateClick = (data) => {
        setuFirstName(data.FirstName);
        setuLastName(data.LastName);
        setuEmail(data.Email);
        setuStatus(data.Status);
        setuPhone(data.PhoneNumber);
        setuSpecialization(data.Specialization);
        setuPatientCount(data.PatientCount);
        setuUserName(data.UserName);
        setuPassword(data.Password);
        setUserID(data.id);

    };

    //delete function
    const handleDelete = (id) => {
        const firestore = firebase.database().ref('/DoctorInfo').child(id);
        firestore.remove();

    };

    // new test

    const useStyles = makeStyles((theme) => ({
        tableContainer : {
            borderRadius: 15,
            margine: '10px 10px',

        },
        status : {
            fontWeight: 'bold',
            fontSize: '0.75 rem',
            color: 'white',
            backgroundColor: 'grey',
            borderRadius: 2,
            padding: '2px 6px',
            display: 'inline-block'
        },
        editbtn : {
        
        }
    }))

    //pagination section
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const classes = useStyles();


    return <div>   

        <div className="header">
            <h2>Doctor Overview</h2> 
        </div>

        {/* all view cards */}
        <Viewcard /> 

        {/* Bar chart based on the firebase data */}
        <Chart />

      
        {/* Add user Button */}
        <div className="con_box">
            <button className="btn_add" onClick={() => {history.push('/register')} }>
            <div className="btn_icon"><i class="user plus icon"></i></div>
            <span className="btn_text" >Add</span>
            </button>
        </div>

        {/* New table test with pagination */}
        <div className="table_cont">
        <TableContainer component={Paper} className={classes.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow selected='true'>
            <TableCell variant='head' size='medium'>First Name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Phone number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Specialization</TableCell>
            <TableCell align="right">Patient Count</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data,index) => (
            <TableRow>
              <TableCell>{data.FirstName}</TableCell>
              <TableCell align="right">{data.LastName}</TableCell>
              {/* <TableCell align="right">{data.Status}</TableCell> */}
              <TableCell>
                  <Typography className={classes.status}
                  style = {{
                      backgroundColor:
                      ((data.Status === 'ASSIGNED' && 'green') ||
                      (data.Status === 'NOT ASSIGNED' && 'blue') ||
                      (data.Status === 'REVOKED' && 'red'))
                  }}>
                      {data.Status}</Typography>
              </TableCell>
              <TableCell align="right">{data.PhoneNumber}</TableCell>
              <TableCell align="right">{data.Email}</TableCell>
              <TableCell align="right">{data.Specialization}</TableCell>
              <TableCell align="right">{data.PatientCount}</TableCell>
              <TableCell align="right">{data.UserName}</TableCell>
              <TableCell align="center">
                  <Button 
                  className={classes.editbtn}
                  variant='outlined'
                  color='primary'
                  onClick={() => {handleUpdateClick(data); handleClickOpen()}}>
                      EDIT
                   
                  </Button>
                  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                                <DialogTitle id="form-dialog-title">Update</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                    <h2>Update User Information</h2>
                                </DialogContentText>

                            <div className="form_container">
                            <form>
                    
                                <input className="input__control"
                                 type ="text"  
                                 value={uFirstName} 
                                 onChange={(e) => {setuFirstName(e.target.value)}}/>
                                <div className="underline"></div>
                                <span>First Name</span>
                                
                                <input className="input__control" 
                                type="text" 
                                value={uLastName} 
                                onChange={(e) => {setuLastName(e.target.value)}}/>
                                <span>Last Name</span>                               
                                
                                <input className="input__control" 
                                type ="text" 
                                value={uEmail} 
                                onChange={(e) => {setuEmail(e.target.value)}} />
                                <span>Email</span>
                                
                                <input className="input__control" 
                                type="text" 
                                value={uStatus} 
                                onChange={(e) => {setuStatus(e.target.value)}}/>
                                <span>Status</span>
                                
                                <input className="input__control" 
                                type="text"  
                                value={uPhone} 
                                onChange={(e) => {setuPhone(e.target.value)}}/>
                                <span>Phone Number</span>
    
                                <input className="input__control" 
                                type="text" 
                                value={uSpecialization} 
                                onChange={(e) => {setuSpecialization(e.target.value)}}/>
                                <span>Specialization</span>

                                <input className="input__control" 
                                type="text"  
                                value={uPatientCount} 
                                onChange={(e) => {setuPatientCount(e.target.value)}}/>
                                <span>Patient Count</span>

                                <input className="input__control" 
                                type="text" 
                                value={uUserName} 
                                onChange={(e) => {setuUserName(e.target.value)}}/>
                                <span>UserNAme</span>

                                <input className="input__control" 
                                type="password"  
                                value={uPassword} 
                                onChange={(e) => {setuPassword(e.target.value)}}/>
                                <span>Password</span>

                                <button className="btn_sub" onClick={() => {handleUpdateUser()}}><span className="btn_txt">Update</span></button>
                        
                        </form>
                    </div>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                </DialogActions>
                            </Dialog> 


                <Button
                    variant='contained'
                    color='error'
                    onClick={() => {
                        handleDelete(data.id);
                    }}
                    >Delete</Button>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter  sx={{ minWidth: '800px' }}>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={userData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
    </div>

    </div>
}

export default DocTable;
