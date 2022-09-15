import React from "react";
import { Routes , Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Auth from "./Auth.jsx";
import Cart from "./Cart.jsx";

export default function(){
  return(
    <>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/auth" element={ <Auth/> } />
        <Route path="/cart" element={ <Cart/> } />
      </Routes>
    </>
  )
}