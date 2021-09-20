/* import {Button, Form, Container, Row, Col,} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import firebase from './Firebase.js'
import React, { useState, useEffect } from "react"; */


/* export default function InputForm() { */
    /* const [aPatientNIC, setAPatientNIC] = useState("");
    const [aPatientFirstName, setAPatientFirstName] = useState("");
    const [aPatientLastName, setAPatientLastName] = useState("");
    const [aPatientDOB, setAPatientDOB] = useState("");
    const [aPatientAddress, setAPatientAddress] = useState("");
    const [aGuardianNIC, setAGuardianNIC] = useState("");
    const [aGuardianName, setAGuardianName] = useState("");
    const [aGuardianAddress, setAGuardianAddress] = useState("");
    const [aGuardianPhone, setAGuardianPhone] = useState(""); */

    /* const handleAddPatient = ()  => {
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
        }
        firestore.push(data);
    }

    return (
        <div>
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Typography variant='h5'>Patient Details</Typography>
                            <hr/>
                            <Form.Group className="mb-3" controlId="formBasicPatientNIC">
                                <Form.Label>Patient NIC</Form.Label>
                                <Form.Control type="text" placeholder="Enter National Indentity Card No." 
                                focus 
                                value={aPatientNIC}
                                onChange={(e) => {
                                setAPatientNIC(e.target.value);
                                }}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPatientNIC">
                                <Form.Label>Patient First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Patient's First Name" 
                                focus 
                                value={aPatientFirstName}
                                onChange={(e) => {
                                setAPatientFirstName(e.target.value);
                                }}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPatientNIC">
                                <Form.Label>Patient Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Patient's Last Name" 
                                focus 
                                value={aPatientLastName}
                                onChange={(e) => {
                                setAPatientLastName(e.target.value);
                                }}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPatientNIC">
                                <Form.Label>Patient's Date of Birth</Form.Label>
                                <Form.Control type="date" 
                                focus 
                                value={aPatientDOB}
                                onChange={(e) => {
                                setAPatientDOB(e.target.value);
                                }}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPatientNIC">
                                <Form.Label>Patient Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Patient's Address" 
                                focus 
                                value={aPatientAddress}
                                onChange={(e) => {
                                setAPatientAddress(e.target.value);
                                }}/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Typography variant='h5'>Guardian Details</Typography>
                            <hr/>
                            <Form.Group className="mb-3" controlId="formBasicPatientNIC">
                                <Form.Label>Guardian NIC</Form.Label>
                                <Form.Control type="text" placeholder="Enter Guardian's NIC" 
                                focus 
                                value={aGuardianNIC}
                                onChange={(e) => {
                                setAGuardianNIC(e.target.value);
                                }}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPatientNIC">
                                <Form.Label>Guardian Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Guardian's Name" 
                                focus 
                                value={aGuardianName}
                                onChange={(e) => {
                                setAGuardianName(e.target.value);
                                }}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPatientNIC">
                                <Form.Label>Guardian Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Guardian's Address" 
                                focus 
                                value={aGuardianAddress}
                                onChange={(e) => {
                                setAGuardianAddress(e.target.value);
                                }}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPatientNIC">
                                <Form.Label>Guardian Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Guardian's Phone" 
                                focus 
                                value={aGuardianPhone}
                                onChange={(e) => {
                                setAGuardianPhone(e.target.value);
                                }}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <Button variant="primary" type="submit" onClick={()=>{handleAddPatient()}}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}
     */