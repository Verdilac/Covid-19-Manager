import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import firebase from '../../Firebase.js';
import React, { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';


const modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const AddPatient = () => {
    const [aPatientNIC, setAPatientNIC] = useState('');
    const [aPatientFirstName, setAPatientFirstName] = useState('');
    const [aPatientLastName, setAPatientLastName] = useState('');
    const [aPatientDOB, setAPatientDOB] = useState('');
    const [aPatientAddress, setAPatientAddress] = useState('');
    const [aGuardianNIC, setAGuardianNIC] = useState('');
    const [aGuardianName, setAGuardianName] = useState('');
    const [aGuardianAddress, setAGuardianAddress] = useState('');
    const [aGuardianPhone, setAGuardianPhone] = useState('');
    const [patientData,setPatientData] = useState([]);

    const [PatientNICErr, setAPatientNICErr] = useState({});
    const [PatientFirstNameErr, setAPatientFirstNameErr] = useState({});
    const [PatientLastNameErr, setAPatientLastNameErr] = useState({});
    const [PatientDOBErr, setAPatientDOBErr] = useState({});
    const [PatientAddressErr, setAPatientAddressErr] = useState({});
    const [GuardianNICErr, setAGuardianNICErr] = useState({});
    const [GuardianNameErr, setAGuardianNameErr] = useState({});
    const [GuardianAddressErr, setAGuardianAddressErr] = useState({});
    const [GuardianPhoneErr, setAGuardianPhoneErr] = useState({});


    useEffect(()=>{
        const firestore = firebase.database().ref("/PatientInfo");
        firestore.on("value",(response) => {
            const data = response.val();
            let patientInfo = [];
            for (let id in data){
                patientInfo.push({
                    id:id,
                    PatientNIC: data[id].PatientNIC,
                    PatientFirstName: data[id].PatientFirstName,
                    PatientLastName: data[id].PatientLastName,
                    PatientDOB: data[id].PatientDOB,
                    PatientAddress: data[id].PatientAddress,
                    GuardianNIC: data[id].GuardianNIC,
                    GuardianName: data[id].GuardianName,
                    GuardianAddress: data[id].GuardianAddress,
                    GuardianPhone:data[id].GuardianPhone,
                });
            }
            setPatientData(patientData);
        })
    },[])

    const handleAddPatient = ()  => {
        const isValid = formValidation();
        if (isValid) {
            const firestore = firebase.database().ref("/PatientInfo");
            let data = {
                PatientNIC:aPatientNIC,
                PatientFirstName:aPatientFirstName,
                PatientLastName:aPatientLastName,
                PatientDOB:aPatientDOB,
                PatientAddress:aPatientAddress,
                GuardianNIC:aGuardianNIC,
                GuardianName:aGuardianName,
                GuardianAddress:aGuardianAddress,
                GuardianPhone:aGuardianPhone
            };
            firestore.push(data);
            setAPatientNIC("");
            setAPatientFirstName("");
            setAPatientLastName("");
            setAPatientDOB("");
            setAPatientAddress("");
            setAGuardianNIC("");
            setAGuardianName("");
            setAGuardianAddress("");
            setAGuardianPhone("");

        }
    }

    const formValidation = () => {
        const PatientNICErr = {};
        const PatientFirstNameErr = {};
        const PatientLastNameErr = {};
        /* const PatientDOBErr = {};
        const PatientAddressErr = {}; */
        const GuardianNICErr = {};
        const GuardianNameErr = {};
        /* const GuardianAddressErr = {}; */
        const GuardianPhoneErr = {};
        let isValid = true;

        if(aPatientNIC.trim().length < 10){
            PatientNICErr.PatientNICShort = "NIC number should be either 10 or 12 characters";
            isValid = false;
        }

        if(aPatientNIC.trim().length > 12){
            PatientNICErr.PatientNICLong = "NIC number should be either 10 or 12 characters";
            isValid = false;
        }

        if(aPatientNIC.trim().length == 11){
            PatientNICErr.PatientNICEleven = "NIC number should be either 10 or 12 characters";
            isValid = false;
        }

        if(typeof aPatientFirstName !== 'string'){
            PatientFirstNameErr.PatientFirstNameNumbers = "Patient's First Name should not include numbers";
            isValid = false;
        }

        if(typeof aPatientLastName !== 'string'){
            PatientLastNameErr.PatientLastNameNumbers = "Patient's Last Name should not include numbers";
            isValid = false;
        }

        if(aGuardianNIC.trim().length < 10){
            GuardianNICErr.GuardianNICShort = "NIC number should be either 10 or 12 characters";
            isValid = false;
        }

        if(aGuardianNIC.trim().length > 12){
            GuardianNICErr.GuardianNICLong = "NIC number should be either 10 or 12 characters";
            isValid = false;
        }

        if(aGuardianNIC.trim().length = 11){
            GuardianNICErr.GuardianNICEleven = "NIC number should be either 10 or 12 characters";
            isValid = false;
        }

        if(aGuardianName.includes("1","2","3","4","5","6","7","8","9", "0")){
            GuardianNameErr.GuardianNameNumbers = "Guardian's Name should not include numbers";
            isValid = false;
        }

        if(aGuardianPhone.trim().length !== 10){
            GuardianPhoneErr.GuardianPhoneLength = "Guardian's phone number should consist of 10 numbers";
            isValid = false;
        }

        setAPatientNICErr(PatientNICErr);
        setAPatientFirstNameErr(PatientFirstNameErr);
        setAPatientLastNameErr(PatientLastNameErr);
        setAGuardianNICErr(GuardianNICErr);
        setAGuardianNameErr(GuardianNameErr);
        setAGuardianPhone(GuardianPhoneErr);
        return isValid;


    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <Button variant="success" onClick={handleOpen}>Patient Admissions</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalstyle}>
                            
                            <Form>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Typography variant='h5'>Patient Details</Typography>
                                            <hr/>
                                            <Form.Group className="PatientNIC" controlId="formBasicPatientNIC">
                                                <Form.Label>Patient NIC</Form.Label>
                                                <Form.Control type="text" placeholder="Enter National Indentity Card No." 
                                                    focus 
                                                    defaultValue={aPatientNIC}
                                                    onChange={(e) => {
                                                        setAPatientNIC(e.target.value);}}/>
                                                <br/>
                                                {Object.keys(PatientNICErr).map((key)=>{
                                                    return <div style={{color: "red"}}>{PatientNICErr[key]}</div>
                                                })}
                                            </Form.Group>
                                            <Form.Group className="PatientFirstName" controlId="formBasicPatientFirstName">
                                                <Form.Label>Patient First Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Patient's First Name" 
                                                focus 
                                                value={aPatientFirstName}
                                                onChange={(e) => {
                                                    setAPatientFirstName(e.target.value);
                                                }}
                                                />
                                                <br/>
                                                {Object.keys(PatientFirstNameErr).map((key)=>{
                                                    return <div style={{color : "red"}}>{PatientFirstNameErr[key]}</div>
                                                })}
                                            </Form.Group>
                                            <Form.Group className="PatientLastName" controlId="formBasicPatientLastName">
                                                <Form.Label>Patient Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Patient's Last Name" 
                                                focus 
                                                defaultValue={aPatientLastName}
                                                onChange={(e) => {
                                                    setAPatientLastName(e.target.value);
                                                }}
                                                />
                                                <br/>
                                                {Object.keys(PatientLastNameErr).map((key)=>{
                                                    return <div style={{color : "red"}}>{PatientLastNameErr[key]}</div>
                                                })}
                                            </Form.Group>
                                            <Form.Group className="PatientDOB" controlId="formBasicPatientDOB">
                                                <Form.Label>Patient's Date of Birth</Form.Label>
                                                <Form.Control type="date" 
                                                focus 
                                                defaultValue={aPatientDOB}
                                                onChange={(e) => {
                                                    setAPatientDOB(e.target.value);
                                                }}
                                                />
                                            </Form.Group>
                                            <Form.Group className="PatientAddress" controlId="formBasicPatientAddress">
                                                <Form.Label>Patient Address</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Patient's Address" 
                                                focus 
                                                defaultValue={aPatientAddress}
                                                onChange={(e) => {
                                                    setAPatientAddress(e.target.value);
                                                }}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Typography variant='h5'>Guardian Details</Typography>
                                            <hr/>
                                            <Form.Group className="GuardianNIC" controlId="formBasicGuardianNIC">
                                                <Form.Label>Guardian NIC</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Guardian's NIC" 
                                                focus 
                                                defaultValue={aGuardianNIC}
                                                onChange={(e) => {
                                                    setAGuardianNIC(e.target.value);
                                                }}
                                                />
                                                <br/>
                                                {Object.keys(GuardianNICErr).map((key)=>{
                                                    return <div style={{color : "red"}}>{GuardianNICErr[key]}</div>
                                                })}

                                            </Form.Group>
                                            <Form.Group className="GuardianName" controlId="formBasicGuardianName">
                                                <Form.Label>Guardian Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Guardian's Name" 
                                                focus 
                                                defaultValue={aGuardianName}
                                                onChange={(e) => {
                                                    setAGuardianName(e.target.value);
                                                }}
                                                />
                                                <br/>
                                                {Object.keys(GuardianNameErr).map((key)=>{
                                                    return <div style={{color : "red"}}>{GuardianNameErr[key]}</div>
                                                })}
                                            </Form.Group>
                                            <Form.Group className="GuardianAddress" controlId="formBasicGuardianAddress">
                                                <Form.Label>Guardian Address</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Guardian's Address" 
                                                focus 
                                                defaultValue={aGuardianAddress}
                                                onChange={(e) => {
                                                    setAGuardianAddress(e.target.value);
                                                }}
                                                />
                                            </Form.Group>
                                            <Form.Group className="GuardianPhone" controlId="formBasicGuardianPhone">
                                                <Form.Label>Guardian Phone Number</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Guardian's Phone" 
                                                focus 
                                                defaultValue={aGuardianPhone}
                                                onChange={(e) => {
                                                    setAGuardianPhone(e.target.value);
                                                }}
                                                />
                                                <br/>
                                                {Object.keys(GuardianPhoneErr).map((key)=>{
                                                    return <div style={{color : "red"}}>{GuardianPhoneErr[key]}</div>
                                                })}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Container>
                                <Button variant="primary" type ="submit" onClick={()=>{handleAddPatient();}}>
                                    Submit
                                </Button>
                            </Form>
                        </Box>
                    </Modal>    
                    </Col>
                </Row>

                
            </Container>
        </div>
    )
};

export default AddPatient;