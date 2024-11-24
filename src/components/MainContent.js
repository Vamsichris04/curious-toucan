import React, { useState } from "react";
import Conversation from "./Conversation";
import InputBar from "./InputBar";
import "../style/MainContent.css";
import "../style/chat.css";

const MainContent = () => {
  const [messages, setMessages] = useState([
    { sender: "agent", content: "Hello! How can I help you today?" }, // Example starter message
  ]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: message },
    ]);
  };

  const handleSendAudio = (audioBlob) => {
    // Create an object URL for the audio blob to play in the browser
    const audioUrl = URL.createObjectURL(audioBlob);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: "AUDIO CONNECT API" }, // Display the audio player
    ]);
    handleAnswer();
  };

  const handleAnswer = () =>{
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "Agent", content: "I am the agent" },
      //MAKE API CALL
    ]);

  }

  const HandleConversation = (message) => {
    handleSendMessage(message);
    handleAnswer();
  }
  return (
    <div className="main-content">
      <Conversation messages={messages} />
      <InputBar onSendMessage={HandleConversation} onSendAudio={handleSendAudio}/>
    </div>
  );
};

export default MainContent;
