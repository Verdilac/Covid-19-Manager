import React from "react";
import { Button, Form, Container, Row, Col, Table, Card } from 'react-bootstrap';




const PatientDash = () => {
    return (
        <div class="card" >
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Admit Patients</Card.Title>
                        <Card.Text>
                            Enter basic patient details to insert a patient record.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>

        </div>
    );
};
export default PatientDash;