import React from "react";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import firebase from "firebase";
import { useState, useEffect } from "react";

export default function Qcard() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const chdb = firebase.firestore();

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = chdb
      .collection("centers")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.id, // `id` given to us by Firebase
          });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

    // return cleanup function
    return () => subscriber();
  }, [loading]); // empty dependencies array => useEffect only called once

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  return (
    <div>
      <Container fluid>
        <Row>
          {posts.map((item) => {
            return (
              <Col md="auto">
                <Card style={{ width: 300, height: "auto" }}>
                  <Card.Img
                    variant="top"
                    src="https://static.thenounproject.com/png/3420396-200.png"
                    style={{ width: 300, height: "auto" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.qcid}</Card.Title>
                    <Card.Text>{item.centername}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <ProgressBar
                      now={item.capacity}
                      label={`${item.capacity}%`}
                    />
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
