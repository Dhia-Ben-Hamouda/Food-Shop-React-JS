import React from "react";
import illustration from "../images/illustration.png";

export default function () {
  return (
    <>
      <section id="contact">
        <div className="header">
          <h1>Contact</h1>
          <h3>Get in touch</h3>
        </div>
        <div className="container">
          <form>

          </form>
          <div className="illustration">
            <img src={illustration} />
          </div>
        </div>
      </section>
    </>
  )
}