import React from 'react';
import './MenuItemCard.css';
import { FaMotorcycle } from 'react-icons/fa'; // Import the scooter icon from the react-icons library
import greekSalad from "../Assetts/greek salad.jpg"

function MenuItemCard() {
  return (
    <div className="menu-item-card">
      <div className="image-container">
        <img src={greekSalad} alt="Greek Salad" />
      </div>
      <div className="text-container">
        <div className="menu-item-title">
          <span>Greek Salad</span>
          <span className="price">$5.00</span>
        </div>
        <p className="menu-item-description">
          A delicious Greek salad made with fresh vegetables, olives, feta cheese, and a tangy dressing.
        </p>
        <div className="order-delivery">
          <FaMotorcycle />
          <a href="#">Order a delivery</a>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
