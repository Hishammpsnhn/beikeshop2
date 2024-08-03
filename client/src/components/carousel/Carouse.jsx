import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-bootstrap/Carousel';

function Carouse({Banner2,Banner3,Banner1}) {
  return (
    <Carousel interval={3000} indicatorLabels={false} controls={false} > {/* Change the interval to your preference */}
      <Carousel.Item>
        <img className="d-block w-100" src={Banner1} alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouse;
