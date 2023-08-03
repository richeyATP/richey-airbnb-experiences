import React from "react";
import thelogo from "../images/airbnb-logo.png";
import "../style.css";

export default function Navbar() {
  return (
    <nav>
      <img src={thelogo} alt="airbnb logo" />
    </nav>
  );
}
