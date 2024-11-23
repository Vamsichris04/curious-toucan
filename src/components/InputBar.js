import React, { useState } from "react";
import "../style/InputBar.css";

const InputBar = ({ onSendMessage, onSendAudio }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => setMessage(e.target.value);

  const handleSendClick = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleAudioClick = () => {
    onSendAudio();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && message.trim()) {
      onSendMessage(message); // Trigger sending the message
      setMessage(""); // Clear the input field
    }
  };

  return (
    <div className="input-bar">
      <button className="audio-button" onClick={handleAudioClick}>
        🎤
      </button>
      <input
        className="input-field"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Listen for Enter key press
      />
      <button className="send-button" onClick={handleSendClick}>
        ➤
      </button>
    </div>
  );
};

export default InputBar;
