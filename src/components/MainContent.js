// src/components/MainContent.js
import React, { useState } from "react";
import ToucanImage from "../assets/Toucan.webp"; // Replace with correct path
import Logo from "../assets/mke_discovery_world_logo.png"; // Replace with your logo's path

function MainContent() {
  const [message, setMessage] = useState(
    "Hello there, adventurers! I'm Curious Toucan, and I'm so excited to see you at Discovery World! Let’s get curious together—tou-can do it!"
  );

  const handleButtonClick = (text) => {
    setMessage(text);
  };

  return (
    <main className="main-content">
      <img src={Logo} alt="Discovery World Logo" className="logo" />
      <div className="bubble-container">
        <div className="speech-bubble">
          <p>{message}</p>
        </div>
        <img src={ToucanImage} alt="Toucan" className="toucan-image" />
      </div>
      <div className="button-container">
        <button
          className="circle-button"
          style={{ top: "-100px", left: "50%" }}
          onClick={() => handleButtonClick("Physics is fascinating! Let’s explore the universe.")}
        >
          Physics
        </button>
        <button
          className="circle-button"
          style={{ top: "50%", right: "-150px" }}
          onClick={() => handleButtonClick("Biology is the study of life. Ready to dive in?")}
        >
          Biology
        </button>
        <button
          className="circle-button"
          style={{ bottom: "-100px", left: "50%" }}
          onClick={() => handleButtonClick("Here are more details about the amazing world around us!")}
        >
          Details
        </button>
        <button
          className="circle-button"
          style={{ top: "50%", left: "-150px" }}
          onClick={() => handleButtonClick("Here’s more content like this. Stay curious!")}
        >
          More
        </button>
      </div>
    </main>
  );
}

export default MainContent;
