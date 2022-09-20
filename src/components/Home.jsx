import React from "react";
import image from "../images/home.png";
import vector from "../images/vector.png";

export default function () {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="wrapper" data-aos="fade-right" data-aos-delay="100">
            <div className="text">
              <h1>The Fastest Delivering food Store</h1>
              <h3>Our mission is to filling your tummy with delicious food and with fast and free delivery !</h3>
              <a href="#menu">
                <h5>Get Started</h5>
                <img src={vector} alt="arrow image" />
              </a>
            </div>
            
          </div>
          <div className="image" data-aos="fade-left" data-aos-delay="100">
            <img src={image} alt="home image" />
          </div>
        </div>
      </section>
    </>
  )
}