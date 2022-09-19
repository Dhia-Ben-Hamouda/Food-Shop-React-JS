import React from "react";
import Item from "./Item.jsx";
import { useState } from "react";
import { useEffect } from "react";
import Api from "../api/baseURL.js";

export default function(){
  const [ data , setData ] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`${Api}/items/getAllItems`);
      const data = await response.json();

      setData(data);
    }
    fetchData();
  } , [])

  return(
    <>
      <section id="menu">
        <div className="header" data-aos="fade-down" data-aos-delay="600">
          <h1>Menu</h1>
          <h3>A menu that always makes you fall in love</h3>
        </div>
        <div className="grid">
          {
            data.map((item,index)=>{
              return(
                <Item
                  key={index}
                  id={item._id}
                  picture={item.picture}
                  name={item.name}
                  price={item.price}
                  type={item.type}
                  delay={ ( index + 1 ) % 4 == 0 ? 400 : ( index + 1 ) % 4 * 100 }
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}