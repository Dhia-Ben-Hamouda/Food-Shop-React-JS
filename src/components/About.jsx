import React from "react";
import Slider from "./Slider.jsx";

export default function () {
  return (
    <>
      <section id="about">
        <div className="header">
          <h1>About</h1>
          <h3>What our customers had to say about us</h3>
        </div>
        <div className="container">
          <Slider />
        </div>
      </section>
    </>
  )
}