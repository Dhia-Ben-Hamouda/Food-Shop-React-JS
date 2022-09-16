import React from "react";
import Item from "./Item.jsx";

export default function(){
  return(
    <>
      <section id="menu">
        <div className="header" data-aos="fade-down" data-aos-delay="600">
          <h1>Menu</h1>
          <h3>A menu that always makes you fall in love</h3>
        </div>
        <div className="grid">
          <Item delay={100} />
          <Item delay={200} />
          <Item delay={300} />
          <Item delay={400} />

          <Item delay={100} />
          <Item delay={200} />
          <Item delay={300} />
          <Item delay={400} />

          <Item delay={100} />
          <Item delay={200} />
          <Item delay={300} />
          <Item delay={400} />
        </div>
      </section>
    </>
  )
}