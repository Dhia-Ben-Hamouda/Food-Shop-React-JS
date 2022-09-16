import React from "react";
import burger from "../images/burger.png";

export default function({delay}){
  return(
    <>
      <div className="item" data-aos="fade-down" data-aos-delay={delay}>
        <img src={burger} />
        <div>
          <h1>Chicken burger</h1>
          <h3>25 $</h3>
        </div>
        <button>Add To Cart</button>
      </div>
    </>
  )
}