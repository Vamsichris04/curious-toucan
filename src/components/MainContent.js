// src/components/MainContent.js
import React, { useState } from "react";
import ToucanImage from "../assets/Toucan.webp"; // Add your Toucan image in the assets folder

function MainContent() {
  const [message, setMessage] = useState(
    "Hello there, adventurers! I'm Curious Toucan, and I'm so excited to see you at Discovery World! Let’s get curious together—tou-can do it!"
  );

  const handleButtonClick = (text) => {
    setMessage(text);
  };

  return (
    <main className="main-content">
      <div className="bubble-container">
        <div className="speech-bubble">
          <p>{message}</p>
        </div>
        <img src={ToucanImage} alt="Toucan" className="toucan-image" />
      </div>
      <div className="button-container">
        <button onClick={() => handleButtonClick("Physics is fascinating! Let’s explore the universe.")}>Physics</button>
        <button onClick={() => handleButtonClick("Biology is the study of life. Ready to dive in?")}>Biology</button>
        <button onClick={() => handleButtonClick("Here are more details about the amazing world around us!")}>
          Give me more details!
        </button>
        <button onClick={() => handleButtonClick("Here’s more content like this. Stay curious!")}>
          Give me more like this!
        </button>
      </div>
    </main>
  );
}

export default MainContent;
