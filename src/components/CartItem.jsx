import React from "react";
import meat from "../assets/meat.png";
import { FaTrash } from "react-icons/fa";

export default function () {
  return (
    <>
      <div className="item">
        <div className="left">
          <img src={meat} />
          <h3>Meat Burger</h3>
        </div>
        <div className="right">
          <div className="actions">
            <span className="minus">-</span>
            <span className="number">1</span>
            <span className="plus">+</span>
          </div>
          <h4>40 $</h4>
          <FaTrash className="trash"/>
        </div>
      </div>
    </>
  )
}