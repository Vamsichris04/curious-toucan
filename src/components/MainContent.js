import React, { useState, useRef } from "react";
import Conversation from "./Conversation";
import InputBar from "./InputBar";
import "../style/MainContent.css";
import "../style/chat.css";
import "../style/Mascots.css"
import ToucanImage from "../assets/toucan_cutout_fr.png";
import TurtleImage from "../assets/turtle_pic_fr.png";
import SlothImage from "../assets/sloth_cutout_fr.png";

const MainContent = () => {
  const [messages, setMessages] = useState([
    { sender: "agent", content: "Hello! How can I help you today?" }, // Example starter message
  ]);
  const audioRef = useRef(null);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: message },
    ]);
    handleAnswer(message); // Trigger the API call and response handling
  };

  const handleAnswer = async (input) => {
    try {
      // Make the API call to the FastAPI server
      const response = await fetch("http://localhost:8080/predict/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: { text: input }, difficulty: { state: 2 } }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from the server.");
      }

      const data = await response.json();

      // Add the agent's response to the messages
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Agent", content: data.response },
      ]);

      fetchAudioAndPlay(data.response);

    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Agent", content: "Sorry, I encountered an error." },
      ]);
    }
  };

  const fetchAudioAndPlay = async (response_message) => {
    try {
      // Append a unique query parameter to the audio URL to prevent caching
      const audioUrl = `http://localhost:8080/audio/tts.wav?timestamp=${Date.now()}`;
      
      // If there is already audio playing, stop it
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Create a new audio element with the updated URL and play the audio
      audioRef.current = new Audio(audioUrl);
      await audioRef.current.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const handleSendAudio = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: "[Audio Message Sent]" },
    ]);
  };

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
    <div className="main-content">
      <div className="button-container">
            <button>
                RELATED TOPICS
            </button>
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
      <div className="chatbot-container" >
        <Conversation messages={messages} currentImage={currentImage}/>
        <InputBar onSendMessage={handleSendMessage} onSendAudio={handleSendAudio} />
      </div>
    </div>
  );
};

export default MainContent;