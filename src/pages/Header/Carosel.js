import React from "react";
import { Carousel } from "react-bootstrap";

const Carosel = () => {
  return (
    <div className="container mt-5 ">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "700px" }}
            src="http://dentario.themerex.net/wp-content/uploads/revslider/dentrario-home-1/h1_sl1_1.png"
            alt="First slide"
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>
              High Innovative Technology
              <br />
              Professional Dentists
            </h3>
            <p>
              Dr. Joseph Phillips is an active member of the Academy of General
              <br />
              Dentistry and strives to stay up to date with the latest in <br />
              techniques and technology in the dental profession.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "700px" }}
            src="http://dentario.themerex.net/wp-content/uploads/revslider/dentrario-home-1/h1_sl1_3.png"
            alt="Second slide"
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>
              High Innovative Technology
              <br />
              Professional Dentists
            </h3>
            <p>
              Dr. Joseph Phillips is an active member of the Academy of General
              <br />
              Dentistry and strives to stay up to date with the latest in <br />
              techniques and technology in the dental profession.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "700px" }}
            src="http://dentario.themerex.net/wp-content/uploads/revslider/dentrario-home-1/h1_sl1_2.png"
            alt="Third slide"
          />
          <Carousel.Caption style={{ color: "black" }}>
            <h3>
              High Innovative Technology
              <br />
              Professional Dentists
            </h3>
            <p>
              Dr. Joseph Phillips is an active member of the Academy of General
              <br />
              Dentistry and strives to stay up to date with the latest in <br />
              techniques and technology in the dental profession.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carosel;
