import React from "react";
import "../styles/Header.css";
import Logo from "../assets/logo.png"; // Path to the logo

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Discovery World Logo" className="logo" />
      <h1 className="title">
        DISCOVERY <span className="world">WORLD</span>
      </h1>
      <div className="menu-icon">☰</div>
    </header>
  );
}

export default Header;
