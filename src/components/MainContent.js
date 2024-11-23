import React, { useState } from "react";
import "../style/MainContent.css";
import ToucanImage from "../assets/Toucan.png";
import AstronautImage from "../assets/astronaut.jpeg";
import TurtleImage from "../assets/turle_cutout_fr.png";
import SlothImage from "../assets/sloth_cutout.png";
import USAFlag from "../assets/usa.jpeg";
import SpainFlag from "../assets/spain.jpeg";
import "../style/Toucan.css";
import "../style/Speech.css";
import "../style/Mascots.css";


function MainContent() {
  const [message, setMessage] = useState(
    "Hello there, adventurers! I'm Curious Toucan, and I'm so excited to see you at Discovery World! Let’s get curious together—tou-can do it!"
  );


const [currentImage, setCurrentImage] = useState(ToucanImage);

  const handleMascotClick = (mascot) => {
    if (mascot === "turtle") {
      setCurrentImage(TurtleImage); // Change to turtle image
    } else if (mascot === "toucan") {
      setCurrentImage(ToucanImage); // Change to toucan image
    } else if (mascot === "sloth") {
      setCurrentImage(SlothImage); // Change to sloth image
    }
  };


  return (
    <main className="main-content">
      <div className="bubble-container">
        <div className="speech-bubble">
          <p>{message}</p>
        </div>
        <div className="mascot-display">
          <img src={currentImage} alt="Selected Mascot" className="selected-mascot" />
        </div>
        <div className="button-container">
          <button onClick={() => setMessage("Translate functionality coming soon!")}>TRANSLATE THIS</button>
          <button onClick={() => setMessage("Challenge accepted! Making it harder...")}>MAKE IT HARDER</button>
          <button onClick={() => setMessage("Simplifying things for you...")}>MAKE IT EASIER</button>
          <button onClick={() => setMessage("Explore related topics!")}>RELATED TOPICS</button>
        </div>
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
      <div className="astronaut-container">
        <img src={AstronautImage} alt="Astronaut" className="astronaut-image" />
        <div className="audio-box">
          <div className="audio-line"></div>
          <div className="audio-line"></div>
          <div className="audio-line"></div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
