import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../app/actions/cartActions.js";

export default function ({name , id , price , picture , quantity}) {
  const dispatch = useDispatch();

  function remove(){
    dispatch(removeFromCart(id));
  }

  return (
    <>
      <div className="item">
        <div className="left">
          <img src={picture} />
          <h3>{name}</h3>
        </div>
        <div className="right">
          <div className="actions">
            <span className="minus">-</span>
            <span className="number">{quantity}</span>
            <span className="plus">+</span>
          </div>
          <h4>{price * quantity} $</h4>
          <FaTrash className="trash"/>
        </div>
      </div>
    </>
  )
}