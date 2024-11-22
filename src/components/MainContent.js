// src/components/MainContent.js
import React, { useState } from "react";
import ToucanImage from "../assets/Toucan.webp"; // Add a toucan image in the assets folder

function MainContent() {
  const [message, setMessage] = useState("Something went wrong. Please try again.");

  const handleButtonClick = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <main className="main-content">
      <div className="toucan-container">
        <img src={ToucanImage} alt="Toucan" className="toucan-image" />
        <div className="text-bubble">
          <p>{message}</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => handleButtonClick("Physics Content Coming Soon!")}>Physics</button>
        <button onClick={() => handleButtonClick("Biology Content Coming Soon!")}>Biology</button>
        <button onClick={() => handleButtonClick("Here are more details!")}>Give me more details!</button>
        <button onClick={() => handleButtonClick("Here’s more like this!")}>Give me more like this!</button>
      </div>
    </main>
  );
}

export default MainContent;
