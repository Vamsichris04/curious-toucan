import React, { useState } from "react";
import "../style/MainContent.css";
import ToucanImage from "../assets/Toucan.png";
import AstronautImage from "../assets/astronaut.jpeg";

function MainContent() {
  const [message, setMessage] = useState(
    "Hello there, adventurers! I'm Curious Toucan, and I'm so excited to see you at Discovery World! Let’s get curious together—tou-can do it!"
  );

  return (
    <main className="main-content">
      <div className="bubble-container">
        <div className="speech-bubble">
          <p>{message}</p>
        </div>
        <img src={ToucanImage} alt="Toucan" className="toucan-image" />
        <div className="button-container">
          <button onClick={() => setMessage("Translate functionality coming soon!")}>TRANSLATE</button>
          <button onClick={() => setMessage("Challenge accepted! Making it harder...")}>MAKE IT HARDER</button>
          <button onClick={() => setMessage("Simplifying things for you...")}>MAKE IT EASIER</button>
          <button onClick={() => setMessage("Explore related topics!")}>RELATED TOPICS</button>
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
