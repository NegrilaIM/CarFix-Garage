import React from "react";
import Slider1 from "../Assets/Slider-1.jpg";
import Slider2 from "../Assets/Slider-2.jpg";
import Slider3 from "../Assets/Slider-3.jpg";
import "./Styles/Carousel.scss";
import Carousel from 'react-bootstrap/Carousel';


export default function CCarousel() {
  return (
    <section className="carusel">
      <Carousel controls= {false} indicators= {false} >
      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src={Slider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src={Slider2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 height"
          src={Slider3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </section>
  );
}
