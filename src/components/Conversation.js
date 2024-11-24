import React from "react";
import Message from "./Message";
import "../style/MainContent.css";
import "../style/chat.css"

const Conversation = ({ messages, currentImage }) => {
  return (
    <div className="chat-container">
      <div className="chat-display">
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} content={message.content} currentImage={currentImage} />
        ))}
      </div>
    </div>
  );
};

export default Conversation;
