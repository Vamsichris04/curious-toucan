import React, { useState, useRef, useEffect, useCallback } from "react";
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
    { sender: "agent", content: "Hello I am Curious Tucan. I am interested about squack-tacular science! Lake Michigan is not just a body of water it's a vital part of our environment and economy. This lake supports various wildlife and provides a space for people to enjoy activities like boating and fishing. However the health of the lake is challenged by issues like pollution and invasive species. Discover how communities around the lake are working to protect this precious resource and promote a brighter future for Lake Michigan" }, // Example starter message
  ]);
  const audioRef = useRef(null);
  const [mascotImages, setMascotImages] = useState([ToucanImage]); // Default to Toucan image
  const [language, setLanguage] = useState("en");  // Default language state

  const handleSendMessage = useCallback((message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: message },
    ]);
    setMascotImages((prevImages) => [
      ...prevImages,
      prevImages[prevImages.length - 1], // Add the same mascot image for the new message
    ]);
    handleAnswer(message, language, true); // Trigger the API call and response handling
  }, [language]);

  const handleAnswer = useCallback(
    async (input, newLanguage, use_history = true) => {
      try {
        // Make the API call to the FastAPI server
        const response = await fetch("http://localhost:8080/predict/text", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: { text: input, language: newLanguage, use_history: use_history }, difficulty: { state: 2 } }),
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

    }
    , [language]);

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

  const handleSendAudio = useCallback(async (audioBlob) => {
    try {
      const file = new File([audioBlob], "audio.wav", { type: "audio/wav" });
      // Create FormData to send audioBlob
      const formData = new FormData();
      formData.append("file", file, "audio.wav");
      console.log(`Language: ${language}`)
      formData.append("language", language); // Optionally add language
      console.log(formData)

      // Send the audio file to the backend
      const response = await fetch(`http://localhost:8080/predict/audio/${language}`, {
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

      handleAnswer(data.response, language, true);

    } catch (error) {
      console.error("Error sending audio:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "agent", content: "Sorry, I encountered an error while processing the audio." },
      ]);
    }
  }, [language]);


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
    if (newLanguage == 'es') {
      handleAnswer(`Repite conmigo: 'Hemos cambiado de idioma al espanol'. En una oracion solamente`, newLanguage, false)
    } else {
      handleAnswer(`Repeat after me: 'We have switched languages to english`, newLanguage, false)
    }
    setLanguage(newLanguage);
  };

  return (
    <div>
      <Header handleLanguageChange={handleLanguageChange} setMascotImages={setMascotImages} setMessage={handleMascotChange} />
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