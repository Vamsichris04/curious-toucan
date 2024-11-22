// src/components/MainContent.js
import React, { useState } from "react";
import ToucanImage from "../assets/Toucan.webp"; // Ensure this path is correct

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
        <div className="button-container">
          <button
            className="circle-button"
            style={{ top: "-50px", left: "50%" }}
            onClick={() => handleButtonClick("Physics is fascinating! Let’s explore the universe.")}
          >
            Physics
          </button>
          <button
            className="circle-button"
            style={{ top: "50%", right: "-50px" }}
            onClick={() => handleButtonClick("Biology is the study of life. Ready to dive in?")}
          >
            Biology
          </button>
          <button
            className="circle-button"
            style={{ bottom: "-50px", left: "50%" }}
            onClick={() => handleButtonClick("Here are more details about the amazing world around us!")}
          >
            Details
          </button>
          <button
            className="circle-button"
            style={{ top: "50%", left: "-50px" }}
            onClick={() => handleButtonClick("Here’s more content like this. Stay curious!")}
          >
            More
          </button>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
