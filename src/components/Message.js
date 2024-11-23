import React from "react";
import "../style/MainContent.css";

const Message = ({ sender, content }) => {
  const isUser = sender === "user";

  return (
    <div className={`message ${isUser ? "right" : "left"}`}>
      <div className="message-content">
        {/* Conditional order of the image and bubble */}
        {!isUser && (
          <img
            className="message-avatar"
            src="/Toucan.png"
            alt="Agent"
          />
        )}
        <div className="speech-bubble">
          <strong>{isUser ? "You" : "Agent"}:</strong> {content}
        </div>
        {isUser && (
          <img
            className="message-avatar"
            src="/Toucan.png"
            alt="User"
          />
        )}
      </div>
    </div>
  );
};

export default Message;
