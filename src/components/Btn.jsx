import React from "react";
import { useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function(){

  useEffect(()=>{
    function makeVisible()
    {
      if(window.scrollY > 0)
      {
        document.querySelector(".btn").classList.add("visible");
      }
      else
      {
        document.querySelector(".btn").classList.remove("visible");
      }
    }

    document.addEventListener("scroll" , makeVisible);

    return ()=>{document.removeEventListener("scroll" , makeVisible)}
  } , []);

  function clickHandler()
  {
    window.scrollTo({
      top:0
    })
  }

  return(
    <>
      <button className="btn" onClick={clickHandler}>
        <FaAngleUp/>
      </button>
    </>
  )
}