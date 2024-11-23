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

  const handleSendAudio = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: "[Audio Message Sent]" },
    ]);
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
