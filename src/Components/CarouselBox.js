import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";

export class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img height={600} className="d-block w-100" src={first} alt="First" />
          <Carousel.Caption>
            <h3>First image</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={600}
            className="d-block w-100"
            src={second}
            alt="Second"
          />
          <Carousel.Caption>
            <h3>Second image</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;
