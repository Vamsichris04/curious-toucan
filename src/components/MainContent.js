import React, { useState, useRef } from "react";
import Conversation from "./Conversation";
import InputBar from "./InputBar";
import "../style/MainContent.css";
// import "../style/chat.css";
// import "../style/Mascots.css"
import ToucanImage from "../assets/toucan_cutout_fr.png";
import TurtleImage from "../assets/turtle_pic_fr.png";
import SlothImage from "../assets/sloth_cutout_fr.png";
import MascotStuff from "./Mascots";
import Header from "./Header";

const MainContent = () => {
  const [messages, setMessages] = useState([
    { sender: "agent", content: "Hello! How can I help you today?" }, // Example starter message
  ]);
  const audioRef = useRef(null);
  const [mascotImages, setMascotImages] = useState([ToucanImage]); // Default to Toucan image
  const [language, setLanguage] = useState("en");  // Default language state

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: message },
    ]);
    setMascotImages((prevImages) => [
      ...prevImages,
      prevImages[prevImages.length - 1], // Add the same mascot image for the new message
    ]);    
    handleAnswer(message); // Trigger the API call and response handling
  };

  const handleAnswer = async (input, promptLanguage, use_history = true) => {
    try {
      // Make the API call to the FastAPI server
      const response = await fetch("http://localhost:8080/predict/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: { text: input, language : promptLanguage, use_history : use_history }, difficulty: { state: 2 }}),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from the server.");
      }

      const data = await response.json();

      // Add the agent's response to the messages
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Agent", content: data.response },
      ]);
      setMascotImages((prevImages) => [
        ...prevImages,
        prevImages[prevImages.length - 1], // Add the same mascot image for the new message
      ]);     

      fetchAudioAndPlay(data.response);

    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Agent", content: "Sorry, I encountered an error." },
      ]);
      setMascotImages((prevImages) => [
        ...prevImages,
        prevImages[prevImages.length - 1], // Add the same mascot image for the new message
      ]);    
    }
    
  };

  const fetchAudioAndPlay = async (response_message) => {
    try {
      // Append a unique query parameter to the audio URL to prevent caching
      const audioUrl = `http://localhost:8080/audio/tts.wav?timestamp=${Date.now()}`;

      // If there is already audio playing, stop it
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Create a new audio element with the updated URL and play the audio
      audioRef.current = new Audio(audioUrl);
      await audioRef.current.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const handleSendAudio = async (audioBlob) => {
    try {
      const file = new File([audioBlob], "audio.wav", { type: "audio/wav" });
      // Create FormData to send audioBlob
      const formData = new FormData();
      formData.append("file", file, "audio.wav");
      formData.append("language", "en"); // Optionally add language
      
      // Send the audio file to the backend
      const response = await fetch("http://localhost:8080/predict/audio", {
        method: "POST",
        body: formData, // Pass FormData object
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch audio response from the server.");
      }
      
      const data = await response.json(); // Parse the JSON response
      
      // Add the agent's response to the messages
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", content: data.response },
      ]);

      setMascotImages((prevImages) => [
        ...prevImages,
        prevImages[prevImages.length - 1], 
      ]);
  
      handleAnswer(data.response);
      
    } catch (error) {
      console.error("Error sending audio:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "agent", content: "Sorry, I encountered an error while processing the audio." },
      ]);
    }
  };

  
  const handleMascotChange = (mascot) => {
    switch (mascot) {
      case "toucan":
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "Agent", content: "I am Curious Toucan I love squactacular Science!!!" },
        ]);
        break;
      case "turtle":
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "Agent", content: "[Audio Message Sent]" },
        ]);      
        break;
      case "sloth":
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "Agent", content: "I AM SLOTH" },
        ]);   
        break;
      default:
        break;  
      }

  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    if (newLanguage == 'es'){
      handleAnswer(`Repite conmigo: 'Hemos cambiado de idioma al espanol'`, newLanguage, false)

    } else{
      handleAnswer(`Repeat after me: 'We have switched languages to english`, newLanguage, false)

    }
  };

  return (
    <div>
    <Header handleLanguageChange={handleLanguageChange} setMascotImages={setMascotImages} setMessage ={handleMascotChange}/>
    {/* <div className="main-content">
      <div className="main-content-fix">
        // <MascotStuff setMascotImages={setMascotImages} setMessage ={handleMascotChange} />
      </div> */}
      <div className="chatbot-container" >
        <Conversation messages={messages} currentImage={mascotImages} />
        <InputBar onSendMessage={handleSendMessage} onSendAudio={handleSendAudio} />
      </div>
    {/* </div> */}
    </div>
  );
};

export default MainContent;