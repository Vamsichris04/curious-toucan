import React from "react";
import "../styles/Header.css";
import Logo from "../assets/logo.png"; // Path to the logo
import '../styles/Header.css'; // If Header.css is in a 'styles' folder within 'src'

function Header() {
  return (
    <header className="header">
      <h1>DISCOVERY <span className="world">WORLD</span></h1>
    </header>
  );
}

export default Header;
