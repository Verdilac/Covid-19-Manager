import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Button, Form, Container, Row, Col} from 'react-bootstrap';

import RemovePatient from './RemovePatient';
import AddPatient from './AddPatient';
import ViewPatient from './ViewPatient';
import EditPatient from './EditPatient';

const BtnLayout = () => {
 return (
        <div>
            <Container>
                <Col>
                    <RemovePatient/>
                </Col>
                <Col>
                    <AddPatient/>
                </Col>
                <Col>
                    <ViewPatient/>
                </Col>
            </Container>
            
            {/* <EditPatient/> */}
        </div>
    )
};

export default BtnLayout;