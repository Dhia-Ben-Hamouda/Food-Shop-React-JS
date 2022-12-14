import React from "react";
import { Routes , Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Auth from "./Auth.jsx";
import Api from "./InsertItem.jsx";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function(){

  useEffect(() => {
    Aos.init({ duration: 750, disable: "phone" });
  })

  return(
    <>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/auth" element={ <Auth/> } />
        <Route path="/insertItem" element={ <Api/> } />
      </Routes>
    </>
  )
}