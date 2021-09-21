import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./ComponentCss.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

export default function FlightCarousel() {


  let aviPrams = new URLSearchParams({
    access_key: "7d8f3d6280cc1380d1f0ff0c167e799a",
    limit: 10,
    arr_iata: "CMB",
  });


  function AirRender(airlineName) {
    for (let i = 0; i < 10; i++) {
      console.log(Airline[i]);
    }
  }

  var Airline = [];

  const [aviObj, setaviObj] = useState([]);
  const [airvalue, setairvalue] = useState("default");
  const [airlineName, setairlineName] = useState([]);

  function doit(aviObj) {
    for (let i = 0; i < 10; i++) {
      console.log(aviObj[i].airline.name);
      var item = aviObj[i].airline.name;
      console.log(item);
      setairlineName((airlineName) => [...airlineName, aviObj[i].airline.name]);
    }
  }

  // useEffect(() => {
  //   fetch(`http://api.aviationstack.com/v1/flights?${aviPrams}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       {
  //         setaviObj(data.data);
  //       }
  //     })
  //     .then(console.log(aviObj))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);


function doit(aviobj) 
  return (
    <Carousel fade className="my-4 FlightCarousel mx-4">



      {aviObj.map((value,index) => {
        return (
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
                <p>Airline name :{aviObj[index].airline.name}</p>
                </Col>
                <Col>
                  <p>Flight Number:{aviObj[index].flight.number}</p>
                </Col>
                <Col>
                  <p>Arrival Airport:{aviObj[index].arrival.airport}</p>
                </Col>
                <Col>
                  <p>Estimated:{aviObj[index].arrival.estimated} </p>
                </Col>
                <Col>
                  <p>Departure Airport:{aviObj[index].departure.airport}</p>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        )
      })}

     
    </Carousel>
  
  );
}
