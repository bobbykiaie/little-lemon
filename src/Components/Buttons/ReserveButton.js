import React from "react";
import "../Css/ReserveButton.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function ReserveButton() {
  return (
    <div className="reserve-button">
      <Link to="/booking">
        <button>Reserve</button>
      </Link>
    </div>
  );
}

export default ReserveButton;
