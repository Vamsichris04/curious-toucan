import React, { useState } from "react";
import Conversation from "./Conversation";
import InputBar from "./InputBar";
import "../style/MainContent.css";

const MainContent = () => {
  const [messages, setMessages] = useState([]);

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

  return (
    <div className="main-content">
      <Conversation messages={messages} />
      <InputBar onSendMessage={handleSendMessage} onSendAudio={handleSendAudio} />
    </div>
  );
};

export default MainContent;
