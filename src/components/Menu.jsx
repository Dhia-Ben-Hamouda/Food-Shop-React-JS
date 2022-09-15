import React from "react";
import Item from "./Item.jsx";

export default function(){
  return(
    <>
      <section id="menu">
        <div className="header">
          <h1>Menu</h1>
          <h3>A menu that always makes you fall in love</h3>
        </div>
        <div className="grid">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </section>
    </>
  )
}