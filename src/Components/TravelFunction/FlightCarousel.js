import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./ComponentCss.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

let aviPrams = new URLSearchParams({
  access_key: "7d8f3d6280cc1380d1f0ff0c167e799a",
  limit: 5,
  arr_iata: "CMB",
});

const imgArr = [
  "https://images.unsplash.com/photo-1552773346-ca6976a5d4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1610497072993-b509c7b10d0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1569938709389-ff8ab00530b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
];

export default function FlightCarousel() {
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

  useEffect(() => {
    fetch(`http://api.aviationstack.com/v1/flights?${aviPrams}`)
      .then((res) => res.json())
      .then((data) => {
        {
          setaviObj(data.data);
        }
      })
      .then(console.log(aviObj))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Carousel fade className="my-4 FlightCarousel mx-4">
        {aviObj.map((value, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100 FlightCarousel"
                src={imgArr[index]}
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
                      <p>Arrival Airport: {aviObj[index].arrival.airport}</p>
                    </Col>
                    <Col>
                      <p>Estimated: {aviObj[index].arrival.estimated} </p>
                    </Col>
                    <Col>
                      <p>
                        Departure Airport: {aviObj[index].departure.airport}
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
