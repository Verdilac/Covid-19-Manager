/* import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Table} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import firebase from './Firebase.js';
import React, { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import { Segment } from 'semantic-ui-react';
import EditForm from './EditForm.js';

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


const EditPatient = () => {
    const [patientData,setpatientData] = useState([]);


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
            setpatientData(patientInfo);
        })
    },[])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(

        <div>
            <Container>
                <Row>
                    <Col>
                    <Button onClick={handleOpen}>Update Details</Button>
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
                                                    <td><EditForm/></td>
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

export default EditPatient;







import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import firebase from './Firebase.js';
import { useState, useEffect } from "react";
import * as React from 'react';
import Box from '@material-ui/core/Box';
import {Button, Form, Container, Row, Col, Table} from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import { Segment } from 'semantic-ui-react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



function ChildModal() {
    const [patientData,setpatientData] = useState([]);
    const [uPatientNIC, setuPatientNIC] = useState('');
    const [uPatientFirstName, setuPatientFirstName] = useState('');
    const [uPatientLastName, setuPatientLastName] = useState('');
    const [uPatientDOB, setuPatientDOB] = useState('');
    const [uPatientAddress, setuPatientAddress] = useState('');
    const [uGuardianNIC, setuGuardianNIC] = useState('');
    const [uGuardianName, setuGuardianName] = useState('');
    const [uGuardianAddress, setuGuardianAddress] = useState('');
    const [uGuardianPhone, setuGuardianPhone] = useState('');
    const [PatientId, setPatientId] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


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
        setpatientData(patientData);
    })
},[])

const handleAddPatient = ()  => {
    const firestore = firebase.database().ref("/PatientInfo");
    let data = {
        PatientNIC:uPatientNIC,
        PatientFirstName:uPatientFirstName,
        PatientLastName:uPatientLastName,
        PatientDOB:uPatientDOB,
        PatientAddress:uPatientAddress,
        GuardianNIC:uGuardianNIC,
        GuardianName:uGuardianName,
        GuardianAddress:uGuardianAddress,
        GuardianPhone:uGuardianPhone
    };
    firestore.push(data);
}

    const handleEditPatient = () => {};

    const handleEditClick = (data) => {
        setuPatientNIC(data.PatientNIC); 
        setuPatientFirstName(data.PatientFirstName);
        setuPatientLastName(data.PatientLastName);
        setuPatientDOB(data.PatientDOB);
        setuPatientAddress(data.PatientAddress);
        setuGuardianNIC(data.GuardianNIC);
        setuGuardianName(data.GuardianName);
        setuGuardianAddress(data.GuardianAddress);
        setuGuardianPhone(data.GuardianPhone);
        setPatientId(data.id);
    }

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 700}}>

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
                                defaultValue={uPatientNIC}
                                onChange={(e) => {
                                    setuPatientNIC(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="PatientFirstName" controlId="formBasicPatientFirstName">
                            <Form.Label>Patient First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Patient's First Name" 
                            focus 
                            value={uPatientFirstName}
                            onChange={(e) => {
                                setuPatientFirstName(e.target.value);
                            }}
                            />
                        </Form.Group>
                        <Form.Group className="PatientLastName" controlId="formBasicPatientLastName">
                            <Form.Label>Patient Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Patient's Last Name" 
                            focus 
                            defaultValue={uPatientLastName}
                            onChange={(e) => {
                                setuPatientLastName(e.target.value);
                            }}
                            />
                        </Form.Group>
                        <Form.Group className="PatientDOB" controlId="formBasicPatientDOB">
                            <Form.Label>Patient's Date of Birth</Form.Label>
                            <Form.Control type="date" 
                            focus 
                            defaultValue={uPatientDOB}
                            onChange={(e) => {
                                setuPatientDOB(e.target.value);
                            }}
                            />
                        </Form.Group>
                        <Form.Group className="PatientAddress" controlId="formBasicPatientAddress">
                            <Form.Label>Patient Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Patient's Address" 
                            focus 
                            defaultValue={uPatientAddress}
                            onChange={(e) => {
                                setuPatientAddress(e.target.value);
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
                            defaultValue={uGuardianNIC}
                            onChange={(e) => {
                                setuGuardianNIC(e.target.value);
                            }}
                            />
                        </Form.Group>
                        <Form.Group className="GuardianName" controlId="formBasicGuardianName">
                            <Form.Label>Guardian Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Guardian's Name" 
                            focus 
                            defaultValue={uGuardianName}
                            onChange={(e) => {
                                setuGuardianName(e.target.value);
                            }}
                            />
                        </Form.Group>
                        <Form.Group className="GuardianAddress" controlId="formBasicGuardianAddress">
                            <Form.Label>Guardian Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Guardian's Address" 
                            focus 
                            defaultValue={uGuardianAddress}
                            onChange={(e) => {
                                setuGuardianAddress(e.target.value);
                            }}
                            />
                        </Form.Group>
                        <Form.Group className="GuardianPhone" controlId="formBasicGuardianPhone">
                            <Form.Label>Guardian Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Guardian's Phone" 
                            focus 
                            defaultValue={uGuardianPhone}
                            onChange={(e) => {
                                setuGuardianPhone(e.target.value);
                            }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col>
                    <Button variant="warning" type ="submit" onClick={()=>{handleAddPatient()}}>
                        Submit
                    </Button>
                </Col>
                    
                <Col>
                    <Button variant="primary" type ="submit" onClick={()=>{handleClose()}}>
                        Close
                    </Button>
                
                </Col>
            </Row>
        </Form>      
          
          
          
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function EditPatient() {
  const [patientData,setpatientData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1330 }}>
        <div>
            <Container>
                <Row>
                    <Col>
                    <Button onClick={handleOpen}>Update Details</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>

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
                                                    <td><ChildModal /></td>
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
          
          
        </Box>
      </Modal>
    </div>
  );
}





















import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Container, Row, Col, Table} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import firebase from './Firebase.js';
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

const EditPatient = () => {
    const [patientData,setPatientData] = useState([]);
    const [uPatientNIC, setuPatientNIC] = useState('');
    const [uPatientFirstName, setuPatientFirstName] = useState('');
    const [uPatientLastName, setuPatientLastName] = useState('');
    const [uPatientDOB, setuPatientDOB] = useState('');
    const [uPatientAddress, setuPatientAddress] = useState('');
    const [uGuardianNIC, setuGuardianNIC] = useState('');
    const [uGuardianName, setuGuardianName] = useState('');
    const [uGuardianAddress, setuGuardianAddress] = useState('');
    const [uGuardianPhone, setuGuardianPhone] = useState('');
    const [PatientId, setPatientId] = useState('');


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
        const firestore = firebase.database().ref("/PatientInfo");
        let data = {
            PatientNIC:uPatientNIC,
            PatientFirstName:uPatientFirstName,
            PatientLastName:uPatientLastName,
            PatientDOB:uPatientDOB,
            PatientAddress:uPatientAddress,
            GuardianNIC:uGuardianNIC,
            GuardianName:uGuardianName,
            GuardianAddress:uGuardianAddress,
            GuardianPhone:uGuardianPhone
        };
        firestore.push(data);
    }

    const handleEditPatient = () => {};

    const handleEditClick = (data) => {
        setuPatientNIC(data.PatientNIC);
        setuPatientFirstName(data.PatientFirstName);
        setuPatientLastName(data.PatientLastName);
        setuPatientDOB(data.PatientDOB);
        setuPatientAddress(data.PatientAddress);
        setuGuardianNIC(data.GuardianNIC);
        setuGuardianName(data.GuardianName);
        setuGuardianAddress(data.GuardianAddress);
        setuGuardianPhone(data.GuardianPhone);
        setPatientId(data.id);
    } 

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(

        <div>
            <Container>
                <Row>
                    <Col>
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
                                                        <Button onClick={()=>{handleEditClick(data); handleOpen() }} >Update Details</Button>
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
                                                                                            defaultValue={uPatientNIC}
                                                                                            onChange={(e) => {
                                                                                                setuPatientNIC(e.target.value);
                                                                                            }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="PatientFirstName" controlId="formBasicPatientFirstName">
                                                                                        <Form.Label>Patient First Name</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Patient's First Name" 
                                                                                        focus 
                                                                                        value={uPatientFirstName}
                                                                                        onChange={(e) => {
                                                                                            setuPatientFirstName(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="PatientLastName" controlId="formBasicPatientLastName">
                                                                                        <Form.Label>Patient Last Name</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Patient's Last Name" 
                                                                                        focus 
                                                                                        defaultValue={uPatientLastName}
                                                                                        onChange={(e) => {
                                                                                            setuPatientLastName(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="PatientDOB" controlId="formBasicPatientDOB">
                                                                                        <Form.Label>Patient's Date of Birth</Form.Label>
                                                                                        <Form.Control type="date" 
                                                                                        focus 
                                                                                        defaultValue={uPatientDOB}
                                                                                        onChange={(e) => {
                                                                                            setuPatientDOB(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="PatientAddress" controlId="formBasicPatientAddress">
                                                                                        <Form.Label>Patient Address</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Patient's Address" 
                                                                                        focus 
                                                                                        defaultValue={uPatientAddress}
                                                                                        onChange={(e) => {
                                                                                            setuPatientAddress(e.target.value);
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
                                                                                        defaultValue={uGuardianNIC}
                                                                                        onChange={(e) => {
                                                                                            setuGuardianNIC(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="GuardianName" controlId="formBasicGuardianName">
                                                                                        <Form.Label>Guardian Name</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Guardian's Name" 
                                                                                        focus 
                                                                                        defaultValue={uGuardianName}
                                                                                        onChange={(e) => {
                                                                                            setuGuardianName(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="GuardianAddress" controlId="formBasicGuardianAddress">
                                                                                        <Form.Label>Guardian Address</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Guardian's Address" 
                                                                                        focus 
                                                                                        defaultValue={uGuardianAddress}
                                                                                        onChange={(e) => {
                                                                                            setuGuardianAddress(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="GuardianPhone" controlId="formBasicGuardianPhone">
                                                                                        <Form.Label>Guardian Phone Number</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Guardian's Phone" 
                                                                                        focus 
                                                                                        defaultValue={uGuardianPhone}
                                                                                        onChange={(e) => {
                                                                                            setuGuardianPhone(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                </Col>
                                                                            </Row>
                                                                        </Container>
                                                                        <Button variant="primary" type ="submit" onClick={()=>{handleEditPatient()}}>
                                                                            Submit
                                                                        </Button>
                                                                    </Form>
                                                                </Box>
                                                            </Modal>
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
                    </Col>
                </Row>
            </Container>
        </div>

    )
};

export default EditPatient; */

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Container, Row, Col, Table} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import firebase from './Firebase.js';
import React, { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import { Segment } from 'semantic-ui-react';

const modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const EditPatient = () => {
    const [patientData,setPatientData] = useState([]);
    const [uPatientNIC, setuPatientNIC] = useState('');
    const [uPatientFirstName, setuPatientFirstName] = useState('');
    const [uPatientLastName, setuPatientLastName] = useState('');
    const [uPatientDOB, setuPatientDOB] = useState('');
    const [uPatientAddress, setuPatientAddress] = useState('');
    const [uGuardianNIC, setuGuardianNIC] = useState('');
    const [uGuardianName, setuGuardianName] = useState('');
    const [uGuardianAddress, setuGuardianAddress] = useState('');
    const [uGuardianPhone, setuGuardianPhone] = useState('');
    const [PatientId, setPatientId] = useState('');


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

    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    const handleEditClick = (data) => {
        setuPatientNIC(data.PatientNIC);
        setuPatientFirstName(data.PatientFirstName);
        setuPatientLastName(data.PatientLastName);
        setuPatientDOB(data.PatientDOB);
        setuPatientAddress(data.PatientAddress);
        setuGuardianNIC(data.GuardianNIC);
        setuGuardianName(data.GuardianName);
        setuGuardianAddress(data.GuardianAddress);
        setuGuardianPhone(data.GuardianPhone);
        setPatientId(data.id);
    }


    const handleEditPatient = () => {
        const firestore = firebase.database().ref('/PatientInfo').child(PatientId);
        firestore.update({
            PatientNIC:uPatientNIC,
            PatientFirstName:uPatientFirstName,
            PatientLastName:uPatientLastName,
            PatientDOB:uPatientDOB,
            PatientAddress:uPatientAddress,
            GuardianNIC:uGuardianNIC,
            GuardianName:uGuardianName,
            GuardianAddress:uGuardianAddress,
            GuardianPhone:uGuardianPhone,

        })

        setuPatientNIC('');
        setuPatientFirstName('');
        setuPatientLastName('');
        setuPatientDOB('');
        setuPatientAddress('');
        setuGuardianNIC('');
        setuGuardianName('');
        setuGuardianAddress('');
        setuGuardianPhone('');





    }
    return(

        <div>
            <Container>
                <Row>
                    <Col>
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
                                                        <Button onClick={()=>{handleEditClick(data); handleOpen() }} >Update Details</Button>
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
                                                                                            defaultValue={uPatientNIC}
                                                                                            onChange={(e) => {
                                                                                                setuPatientNIC(e.target.value);
                                                                                            }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="PatientFirstName" controlId="formBasicPatientFirstName">
                                                                                        <Form.Label>Patient First Name</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Patient's First Name" 
                                                                                        focus 
                                                                                        value={uPatientFirstName}
                                                                                        onChange={(e) => {
                                                                                            setuPatientFirstName(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="PatientLastName" controlId="formBasicPatientLastName">
                                                                                        <Form.Label>Patient Last Name</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Patient's Last Name" 
                                                                                        focus 
                                                                                        defaultValue={uPatientLastName}
                                                                                        onChange={(e) => {
                                                                                            setuPatientLastName(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="PatientDOB" controlId="formBasicPatientDOB">
                                                                                        <Form.Label>Patient's Date of Birth</Form.Label>
                                                                                        <Form.Control type="date" 
                                                                                        focus 
                                                                                        defaultValue={uPatientDOB}
                                                                                        onChange={(e) => {
                                                                                            setuPatientDOB(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="PatientAddress" controlId="formBasicPatientAddress">
                                                                                        <Form.Label>Patient Address</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Patient's Address" 
                                                                                        focus 
                                                                                        defaultValue={uPatientAddress}
                                                                                        onChange={(e) => {
                                                                                            setuPatientAddress(e.target.value);
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
                                                                                        defaultValue={uGuardianNIC}
                                                                                        onChange={(e) => {
                                                                                            setuGuardianNIC(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="GuardianName" controlId="formBasicGuardianName">
                                                                                        <Form.Label>Guardian Name</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Guardian's Name" 
                                                                                        focus 
                                                                                        defaultValue={uGuardianName}
                                                                                        onChange={(e) => {
                                                                                            setuGuardianName(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="GuardianAddress" controlId="formBasicGuardianAddress">
                                                                                        <Form.Label>Guardian Address</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Guardian's Address" 
                                                                                        focus 
                                                                                        defaultValue={uGuardianAddress}
                                                                                        onChange={(e) => {
                                                                                            setuGuardianAddress(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="GuardianPhone" controlId="formBasicGuardianPhone">
                                                                                        <Form.Label>Guardian Phone Number</Form.Label>
                                                                                        <Form.Control type="text" placeholder="Enter Guardian's Phone" 
                                                                                        focus 
                                                                                        defaultValue={uGuardianPhone}
                                                                                        onChange={(e) => {
                                                                                            setuGuardianPhone(e.target.value);
                                                                                        }}
                                                                                        />
                                                                                    </Form.Group>
                                                                                </Col>
                                                                            </Row>
                                                                        </Container>
                                                                        <Button variant="primary" type ="submit" onClick={()=>{handleEditPatient(data)}}>
                                                                            Submit
                                                                        </Button>
                                                                    </Form>
                                                                </Box>
                                                            </Modal>
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
                       
                    </Col>
                </Row>
            </Container>
        </div>

    )
};

export default EditPatient;