import React from 'react';
import {Card} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';




import { Container, Row, Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <div >
      <Container>
        <Row xs="3">
            <Col>
                <Card style={{ width: '18rem' , height:'15rem'}}>
                    <Card.Body>
                        <Card.Title >Cases Trends</Card.Title>
                        <Card.Link href="#">Click Here</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' , height:'15rem'}}>
                    <Card.Body>
                        <Card.Title>My Patients</Card.Title>
                        <Card.Link href="#">Click Here</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' , height:'15rem'}}>
                    <Card.Body>
                        <Card.Title>Hospital Patient Info</Card.Title>
                        <Card.Link href="#">Click Here</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </div>
  );
}