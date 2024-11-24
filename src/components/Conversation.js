import React from "react";
import Message from "./Message";
import "../style/MainContent.css";

const Conversation = ({ messages }) => {
  return (
    <div className="chat-container">
      <div className="chat-display">
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} content={message.content} />
        ))}
      </div>
    </div>
  );
};

export default Conversation;
