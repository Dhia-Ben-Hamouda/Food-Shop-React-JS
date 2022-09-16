import React from "react";
import Slider from "./Slider.jsx";

export default function () {
  return (
    <>
      <section id="about">
        <div className="header" data-aos="fade-down" data-aos-delay="600">
          <h1>About</h1>
          <h3>What our customers had to say about us</h3>
        </div>
        <div className="container" data-aos="fade-down" data-aos-delay="400">
          <Slider />
        </div>
      </section>
    </>
  )
}