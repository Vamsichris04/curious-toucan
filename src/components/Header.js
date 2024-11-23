import React from "react";
import "../style/Header.css";
import logo from "../assets/Discovery_world_logo.png";
import '../style/Header.css'; // If Header.css is in a 'styles' folder within 'src'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Discovery World Logo" className="logo" />
      <h1>DISCOVERY <span className="world">WORLD</span></h1>
    </header>
  );
}

export default Header;
