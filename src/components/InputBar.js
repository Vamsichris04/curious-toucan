import React, { useState, useRef } from "react";
import "../style/InputBar.css";

const InputBar = ({ onSendMessage, onSendAudio }) => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunks = useRef([]); // Use a ref to store audio chunks

  const handleStartRecording = async () => {
    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      // Clear previous chunks
      audioChunks.current = [];

      // Store recorded audio chunks
      recorder.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      // Handle the stop event
      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log("Audio Blob URL:", audioUrl);

        // Send the audio data to parent via callback
        onSendAudio(audioBlob);
      };

      // Start recording
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleInputChange = (e) => setMessage(e.target.value);

  const handleSendClick = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && message.trim()) {
      onSendMessage(message); // Trigger sending the message
      setMessage(""); // Clear the input field
    }
  };

  return (
    <div className="input-bar">
      <button
        className={`audio-button ${isRecording ? "recording" : ""}`}
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      >
        {isRecording ? "Stop Recording" : "Record Audio"} 🎤
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
