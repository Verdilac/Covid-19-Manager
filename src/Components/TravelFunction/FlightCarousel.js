import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./ComponentCss.css";
import { Container, Row, Col } from "react-bootstrap";

export default function FlightCarousel() {


    var aviObj;

    let aviPrams = new URLSearchParams({
        access_key: "7d8f3d6280cc1380d1f0ff0c167e799a",
        limit: 100,
        arr_iata: "CMB",
      });

// fetch(`http://api.aviationstack.com/v1/flights?${aviPrams}`)
//   .then((res) => res.json())
//   .then((data) => (aviObj = data.data))
//   .then(console.log);
function doit(aviobj) {
    // console.log("function call");
    // for (let item in aviObj) {
    //   console.log(item.airline.name);
    // }
    for (let i = 0; i < 100; i++) {
      console.log(aviObj[i].airline.name);
    }
  
    // console.log(aviObj[2].airline.name);
  }


  return (
    <Carousel fade className="my-4 FlightCarousel mx-4">

      

      <Carousel.Item>
        <img
          className="d-block w-100 FlightCarousel"
          src="https://images.unsplash.com/photo-1553619948-505cc1cdc320?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <Container>
            <Row>
              <Col>
                <p>Airline</p>
              </Col>
              <Col>
                <p>Flight Number</p>
              </Col>
              <Col>
                <p>Arrival Airport</p>
              </Col>
              <Col>
                <p>Estimated </p>
              </Col>
              <Col>
                <p>Departure Airport</p>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
