import React from "react";
import "../style/Header.css";
import logo from "../assets/Discovery_world_logo.png";
import usaFlag from "../assets/usa.jpeg";
import spainFlag from "../assets/spain.jpeg";


function Header() {
  return (
    <header className="header">
      {/* Left Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Discovery World Logo" className="logo" />
      </div>

      {/* Title Section */}
      <div className="title-container">
        <h1 className="title">
          DISCOVERY
          <span className="world">WORLD</span>
        </h1>
      </div>

      {/* Language Selector */}
      <div className="language-selector">
        <img
          src={usaFlag}
          alt="English"
          className="flag"
          title="Switch to English"
        />
        <img
          src={spainFlag}
          alt="Spanish"
          className="flag"
          title="Switch to Spanish"
        />
      </div>
    </header>
  );
}

export default Header;