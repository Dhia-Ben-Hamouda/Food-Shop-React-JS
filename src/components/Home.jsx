import React from "react";
import image from "../images/home.png";

export default function () {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="wrapper">
            <div className="text">
              <h1>The Fastest Delivering food Store</h1>
              <h3>Our mission is to filling your tummy with delicious food and with fast and free delivery !</h3>
              <a href="#">
                Get Started
              </a>
            </div>
            
          </div>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}