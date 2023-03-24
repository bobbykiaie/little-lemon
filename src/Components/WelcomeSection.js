import React from "react";
import ReserveButton from "./Buttons/ReserveButton";
import "./Css/Welcome.css";

function Welcome() {
  return (
    <div className="heading-section">
      <h1 className="restaurant-title">Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        Welcome to the vibrant flavors of the Mediterranean! Join us for an
        unforgettable culinary journey as we bring the best of the region's
        cuisine right to your table.
      </p>
      <ReserveButton />
    </div>
  );
}

export default Welcome;
