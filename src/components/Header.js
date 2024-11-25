import React, { useState } from "react";

import "../style/Header.css";
import logo from "../assets/Discovery_world_logo.png";
import usaFlag from "../assets/usa.jpeg";
import spainFlag from "../assets/spain.jpeg";
import MainContent from "./MainContent";
import TurtleImage from "../assets/turtle_pic_fr.png";
import ToucanImage from "../assets/toucan_cutout_fr.png";
import SlothImage from "../assets/sloth_cutout_fr.png";


const Header = ({ handleLanguageChange, setMascotImages,setMessage }) => {
  const handleMascotClick = (mascot) => {
    if (mascot === "turtle") {
      setMascotImages((prevImages) => [...prevImages, TurtleImage]);
      setMessage(mascot)
    } else if (mascot === "toucan") {
      setMascotImages((prevImages) => [...prevImages, ToucanImage]);
      setMessage(mascot)
    } else if (mascot === "sloth") {
      setMascotImages((prevImages) => [...prevImages, SlothImage]);
      setMessage(mascot)
    }
  };
 
  return (
    <header className="header">
      {/* Left Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Discovery World Logo" className="logo" />
      </div>
      <div className="mascot-container">

      <div className="mascot" onClick={() => handleMascotClick("turtle")}>
          <img src={TurtleImage} alt="Turtle" className="mascot-image" />
          <p className="mascot-label">Timmy the Turtle</p>
      </div>
      <div className="mascot" onClick={() => handleMascotClick("toucan")}>
          <img src={ToucanImage} alt="Toucan" className="mascot-image" />
          <p className="mascot-label">Curious Toucan</p>
        </div>
        <div className="mascot" onClick={() => handleMascotClick("sloth")}>
          <img src={SlothImage} alt="Mascot 3" className="mascot-image" />
          <p className="mascot-label">Wise Sloth</p>
        </div>
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
          onClick={() => handleLanguageChange("en")} // Change to English

        />
        <img
          src={spainFlag}
          alt="Spanish"
          className="flag"
          title="Switch to Spanish"
          onClick={() => handleLanguageChange("es")}
        />
      </div>
    </header>
  );
}

export default Header;