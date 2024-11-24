import React, { useState, useEffect, audioRef } from "react";
 
const AudioPlayer = ({ input, onAudioResponse }) => {
  const [isStopped, setIsStopped] = useState(false);
 
  // Function to fetch the new audio file and play it
  const fetchAudioAndPlay = async () => {
    if (isStopped || !input) return;
 
    try {
      // Fetch the new audio file
      const response = await fetch("http://localhost:8080/predict/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: { text: input }, difficulty: { state: 2 } }),
      });
 
      if (!response.ok) {
        throw new Error("Failed to fetch audio");
      }
 
      const data = await response.json();
 
      const response_message = data.response;
 
      if (onAudioResponse) {
        onAudioResponse(response_message); // Pass response_message to the callback
      }
 
      // Append a unique query parameter to the audio URL to prevent caching
      const audioUrl = `http://localhost:8080/audio/tts.wav?timestamp=${Date.now()}`;
      
      if (audioRef.current) {
        audioRef.current.pause(); // Stop any currently playing audio
      }
 
      // Create a new audio element with the updated URL
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play().catch((error) => console.error("Error playing audio:", error));
    } catch (error) {
      console.error("Error fetching or playing audio:", error);
    }
  };
 
  // Play the audio whenever the input changes and the button is not in the stopped state
  useEffect(() => {
    fetchAudioAndPlay();
  }, [input, isStopped]);
 
  // Toggle the stopped state
  const toggleStop = () => {
    setIsStopped((prevState) => {
      if (!prevState && audioRef.current) {
        audioRef.current.pause(); // Stop and forget the current audio
        audioRef.current.currentTime = 0; // Reset the audio timestamp
      }
      return !prevState;
    });
  };
 
};
 
export default AudioPlayer;