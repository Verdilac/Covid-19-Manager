import { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import firebase from '../firebase';
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
import { Card, CardActionArea } from "@material-ui/core";

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
    const [uAddress, setuAddress] = useState('');
    const [uPhone, setuPhone] = useState('');
    const [uGender, setuGender] = useState('');
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
            Address: uAddress,
            PhoneNumber: uPhone,
            Specialization: uSpecialization,
            PatientCount: uPatientCount,
            UserName: uUserName,
            Password: uPassword,
        })
        setuFirstName('');
        setuLastName('');
        setuEmail('');
        setuAddress('');
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
                    Address: data[id].Address,
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

    //getting database data

    const handleUpdateClick = (data) => {
        setuFirstName(data.FirstName);
        setuLastName(data.LastName);
        setuEmail(data.Email);
        setuAddress(data.Address);
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

    return <div> 

        <div className="header">
            <h2>Doctor Overview</h2>
        </div>

        <div className="con_box">
            <button className="btn_add" onClick={() => {history.push('/register')} }>
            <div className="btn_icon"><i class="user plus icon"></i></div>
            <span className="btn_text" >Add</span>
            </button>
        </div>
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>FirstName</Table.HeaderCell>
                    <Table.HeaderCell>LastName</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                    <Table.HeaderCell>PhoneNumber</Table.HeaderCell>
                    <Table.HeaderCell>Specialization</Table.HeaderCell>
                    <Table.HeaderCell>PatientCount</Table.HeaderCell>
                    <Table.HeaderCell>UserName</Table.HeaderCell>
                    <Table.HeaderCell>Password</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {
                userData.map((data,index) => {
                    return <Table.Body>
                        <Table.Cell>{data.FirstName}</Table.Cell>
                        <Table.Cell>{data.LastName}</Table.Cell>
                        <Table.Cell>{data.Email}</Table.Cell>
                        <Table.Cell>{data.Address}</Table.Cell>
                        <Table.Cell>{data.PhoneNumber}</Table.Cell>
                        <Table.Cell>{data.Specialization}</Table.Cell>
                        <Table.Cell>{data.PatientCount}</Table.Cell>
                        <Table.Cell>{data.UserName}</Table.Cell>
                        <Table.Cell>{data.Password}</Table.Cell>
                        <Table.Cell>
                        <div className="btn_container">
                            <button className="btn" onClick={() => {handleUpdateClick(data); handleClickOpen()}}>
                                <div className="btn_icon"><i class="small edit outline icon"></i></div>
                                <span className="btn_text" >Edit</span>
                            </button>
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullScreen>
                                <DialogTitle id="form-dialog-title">Update</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                    <h2>Update User Information</h2>
                                </DialogContentText>

                            <div className="form_container">
                            <form>
                    
                                <input className="input__control" type ="text" placeholder="First Name" value={uFirstName} onChange={(e) => {setuFirstName(e.target.value)}}/>
                                <div className="underline"></div>
                                
                                <input className="input__control" type="text" value={uLastName} onChange={(e) => {setuLastName(e.target.value)}}/>
                                <span>Last NAme</span>
                                
                                
                                <input className="input__control" type ="text"  onChange={(e) => {setuEmail(e.target.value)}} />
                                <span>Email</span>
                                
                                
                                <input className="input__control" type="text" value={uAddress} onChange={(e) => {setuAddress(e.target.value)}}/>
                                <span>Address</span>
                        
                                
                                <input className="input__control" type="text"  value={uPhone} onChange={(e) => {setuPhone(e.target.value)}}/>
                                <span>Phone Number</span>

                                {/* <div className="form-check">
                                <label className="gen">Gender</label>
                                <input className="form-check-input" type="radio" value={aGender} onChange={(e) => {setaGender(e.target.value)}} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" value={aGender} onChange={(e) => {setaGender(e.target.value)}} />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Female
                                </label>
                                </div> */}
                            
                                
                                <input className="input__control" type="text" value={uSpecialization} onChange={(e) => {setuSpecialization(e.target.value)}}/>
                                <span>Specialization</span>

                                <input className="input__control" type="text"  value={uPatientCount} onChange={(e) => {setuPatientCount(e.target.value)}}/>
                                <span>Patient Count</span>

                                <input className="input__control" type="text" value={uUserName} onChange={(e) => {setuUserName(e.target.value)}}/>
                                <span>UserNAme</span>

                                <input className="input__control" type="text"  value={uPassword} onChange={(e) => {setuPassword(e.target.value)}}/>
                                <span>Password</span>

                                <button className="btn_update" onClick={() => {handleUpdateUser()}}><span>Update</span></button>
                        
                    </form>
                    </div>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                </DialogActions>
                            </Dialog>
                            <button className="btn_del" onClick={() => {handleDelete(data.id)}}>
                                <div className="btn_icon"><i class="small trash alternate icon"></i></div>
                                <span className="btn_text">Delete</span>
                            </button>
                        </div>
                        </Table.Cell>
                    </Table.Body>
                })
            }
        </Table>
    </div>
}

export default DocTable;
