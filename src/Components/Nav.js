import React from "react";
import logo from "../Assetts/Logo.svg"
import "./Css/Nav.css"

function Nav() {
  //update the component to use routes instead of anchor tags
  
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Nav;