import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Container, Row, Col, Table} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import firebase from '../TravelFunction/Firebase';
import React, { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import { Segment } from 'semantic-ui-react';

const modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const RemovePatient = () => {
    const [patientData,setPatientData] = useState([]);


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
            setPatientData(patientInfo);
        })
    },[])

    
    const handleDelete = (id) => {
        const firestore = firebase
            .database()
            .ref("/PatientInfo")
            .child(id);
        firestore.remove();
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(

        <div>
            <Container>
                <Row>
                    <Col>
                    <Button variant="danger" onClick={handleOpen}>Patient Removal</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalstyle}>

                        <Row columns="1">
                        <Col>
                        {
                            patientData.length == 0 ? (
                            <Segment padded="very">
                                <Typography align="center">
                                    No Data Available! Enter data to view!
                                </Typography>
                            </Segment>
                            ) : (
                            <Segment padded="very">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Patient NIC</th>
                                            <th>Patient First Name</th>
                                            <th>Patient Last Name</th>
                                            <th>Patient DOB</th>
                                            <th>Patient Address</th>
                                            <th>Guardian NIC</th>
                                            <th>Guardian Name</th>
                                            <th>Guardian Address</th>
                                            <th>Guardian Phone</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    {
                                        patientData.map((data,index)=>{
                                            return <tbody>
                                                <tr>
                                                    <td>{data.PatientNIC}</td>
                                                    <td>{data.PatientFirstName}</td>
                                                    <td>{data.PatientLastName}</td>
                                                    <td>{data.PatientDOB}</td>
                                                    <td>{data.PatientAddress}</td>
                                                    <td>{data.GuardianNIC}</td>
                                                    <td>{data.GuardianName}</td>
                                                    <td>{data.GuardianAddress}</td>
                                                    <td>{data.GuardianPhone}</td>
                                                    <td>
                                                    <Button 
                                                        variant="danger"
                                                        onClick={()=>{handleDelete(data.id)}} 
                                                    >
                                                        Discharge / Report Death
                                                    
                                                    </Button>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        })
                                    }
                                </Table>
                            </Segment>
                        )}

                    </Col>
                    </Row>       
                    </Box>
                    </Modal>    
                    </Col>
                </Row>



            </Container>
        </div>

    )
};

export default RemovePatient;




