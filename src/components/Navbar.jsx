import React from "react";
import burger from "../images/burger.png";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

export default function(){
  return(
    <>
      <nav>
        <div className="website">
          <img src={burger} alt="" />
          <h1>Food Shop</h1>
        </div>
        <ul className="desktop-list">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
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