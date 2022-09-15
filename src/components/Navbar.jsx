import React from "react";
import burger from "../images/burger.png";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { useEffect } from "react";

export default function(){

  useEffect(()=>{
    function toggleAnimation()
    {
      if(window.scrollY > 0)
      {
        document.querySelector("nav").classList.add("sticky");
      }
      else
      {
        document.querySelector("nav").classList.remove("sticky");
      }
    }
  
    document.addEventListener("scroll" , toggleAnimation);
  
    return ()=>{document.removeEventListener("scroll" , toggleAnimation);}
  } , []);

  return(
    <>
      <nav>
        <div className="website">
          <img src={burger} alt="" />
          <h1>Food Shop</h1>
        </div>
        <ul className="desktop-list">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </ul>
        <div className="container">
          <a href="#">
            <FaUser />
            <h3>Sign in</h3>
          </a>
          <FaShoppingBag className="icon"/>
          <div className="num">
            0
          </div>
        </div>
      </nav>
    </>
  )
}