import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Menu from "./Menu.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

export default function(){
  return(
    <>
      <Navbar/>
      <Home/>
      <Menu/>
      <Contact/>
      <Footer/>
    </>
  )
}