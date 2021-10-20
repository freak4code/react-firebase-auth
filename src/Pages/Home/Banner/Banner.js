import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {

  // render html
  return (
    <Carousel style={{ margin: "20px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Heavy Lifting</h3>
          <p>Make your hand strong and more capable</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfgDXr1_IMGST0-6wLBqQCeB7Gzm-qbjYvg&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Never Stop Running</h3>
          <p>Run regurlarly and keep your body fit !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Never Give Up</h3>
          <p>No matter what. Always try your best.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
