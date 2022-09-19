import React from "react";

export default function({delay , name , picture , price , id}){
  return(
    <>
      <div className="item" data-aos="fade-down" data-aos-delay={delay}>
        <img src={picture} />
        <div>
          <h1>{name}</h1>
          <h3>{price} $</h3>
        </div>
        <button>Add To Cart</button>
      </div>
    </>
  )
}