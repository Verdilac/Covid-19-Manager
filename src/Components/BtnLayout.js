import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Button, Form, Container, Row, Col, Card} from 'react-bootstrap';
import { Segment } from 'semantic-ui-react';

import RemovePatient from './RemovePatient';
import AddPatient from './AddPatient';
import ViewPatient from './ViewPatient';
import EditPatient from './EditPatient';


const BtnLayout = () => {
 return (
        <div>
            <div> 
            <Container>
                <Row/>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Admit Patients</Card.Title>
                                <Card.Text>
                                Enter basic patient details to insert a patient record.
                                </Card.Text>
                                <AddPatient/>     
                            </Card.Body>
                    </Card>
                    </Col>


                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>View Patient Details</Card.Title>
                                <Card.Text>
                                View Basic Patient details stored in the system.
                                </Card.Text>
                                <ViewPatient/>
                            </Card.Body>
                    </Card>
                    </Col>


                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Discharge / Report Decease</Card.Title>
                                <Card.Text>
                                Remove patient details of deceased or discharged patients.
                                </Card.Text>
                                <RemovePatient/>
                            </Card.Body>
                    </Card>

                    <Container>
                        <EditPatient/>
                    </Container>



                    </Col>


                                 

                    


                </Row>
            </Container>
            </div>

            
            
        </div>
    )
};

export default BtnLayout;