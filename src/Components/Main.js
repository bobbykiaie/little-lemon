import React from "react";
import ReserveButton from "./Buttons/ReserveButton";
import "./Css/Main.css";
import Welcome from "./WelcomeSection";
import Image from 'react-bootstrap/Image'
import sconeImage from "../Assetts/restauranfood.jpg"
import MenuItemCard from "./MenuItemCard";
import BookForm from "./BookForm";


function Main() {
  return (
    <main>
      <div className="main-container">
        <section className="firstSection">
          <Welcome />
          <div className="img-container">
            <img src={sconeImage} alt="Scone" className="img-scone" />
          </div>
        </section>
        <section className="secondSection">
          {/* Second section content */}
          <div className="above-card-section">
            <div><h1>This weeks specials!</h1></div>
            <div></div>
            <div><ReserveButton /></div>
          </div>
          <div className="menu-card-container">
            <div className="menu-card-section"><MenuItemCard /></div>
            <div className="menu-card-section"><MenuItemCard /></div>
            <div className="menu-card-section"><MenuItemCard /></div>
          </div>
        </section>
        <section className="thirdSection">
          <div>
            R3(R1A)
          </div>
          <div>
          <div>R3(R2A)</div>
          <div>R2(R2B)</div>
          <div>R2(R2C)</div>
          <div>R2(R2D)</div>
          </div>
        </section>
        <section className="fourthSection">
          {/* Fourth section content */}
       
        </section>
      </div>
    </main>
  );
}

export default Main;
