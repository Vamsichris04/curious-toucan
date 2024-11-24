import React, { useState } from "react";
import "../style/MainContent.css";
import "../style/Toucan.css";
import "../style/Mascots.css";
import "../style/Mascots.css"
import ToucanImage from "../assets/toucan_cutout_fr.png";
import TurtleImage from "../assets/turtle_pic_fr.png";
import SlothImage from "../assets/sloth_cutout_fr.png";
import MainContent from "./MainContent";

const MascotStuff = ({ setMascotImages, setMessage }) => {
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
  );
};
 
export default MascotStuff;
