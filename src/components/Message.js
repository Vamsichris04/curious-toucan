import React from "react";
import ReactMarkdown from "react-markdown";
import "../style/MainContent.css";
import UserImage from "../assets/user_cutout.png";

const Message = ({ sender, content, currentImage}) => {
  const isUser = sender === "user";

  return (
    <div className={`message ${isUser ? "right" : "left"}`}>
      <div className="message-content">
        {/* Conditional order of the image and bubble */}
        {!isUser && (
          <img
            className="message-avatar"
            src={currentImage}
            alt="Agent"
          />
        )}
        <div className="speech-bubble">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        {isUser && (
          <img
            className="message-avatar"
            src={UserImage}
            alt="User"
          />
        )}
      </div>
    </div>
  );
};

export default Message;
