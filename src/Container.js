import React from "react";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function Container() {
  return (
    <div className="container">
      <Nav className="page-section-one"/>
      <Main className="page-section-two" />
      <Footer className="page-section-three"/>
    </div>
  );
}

export default Container;
