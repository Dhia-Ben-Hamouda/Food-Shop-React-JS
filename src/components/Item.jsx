import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/actions/cartActions.js";

export default function ({ delay, name, picture, price, id }) {
  const dispatch = useDispatch();

  function add() {
    dispatch(addToCart({
      name,
      price,
      id,
      picture,
      quantity: 1
    }))
  }

  return (
    <>
      {
        window.innerWidth > 768 ? <>
          <div className="item" data-aos="fade-down" data-aos-delay={delay}>
            <img src={picture} alt="item image" />
            <div>
              <h1>{name}</h1>
              <h3>{price} $</h3>
            </div>
            <button onClick={add}>Add To Cart</button>
          </div>
        </> : <div className="item">
          <img src={picture} alt="item image" />
          <div>
            <h1>{name}</h1>
            <h3>{price} $</h3>
          </div>
          <button onClick={add}>Add To Cart</button>
        </div>
      }
    </>
  )
}