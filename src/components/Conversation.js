import React, { useState, useEffect } from "react";
import Message from "./Message";
import "../style/MainContent.css";

const Conversation = () => {
  const [messages, setMessages] = useState([]);
  const conversation = [
    { sender: "agent", content: "Hello! How can I help you today?" },
    { sender: "user", content: "I need assistance with my order." },
    { sender: "agent", content: "Of course! Can you provide your order number?" },
    { sender: "agent", content: "Hello! How can I help you today?" },
    { sender: "user", content: "I need assistance with my order." },
    { sender: "agent", content: "Of course! Can you provide your order number?" },   { sender: "agent", content: "Hello! How can I help you today?" },
    { sender: "user", content: "I need assistance with my order." },
    { sender: "agent", content: "Of course! Can you provide your order number?" },   { sender: "agent", content: "Hello! How can I help you today?" },
    { sender: "user", content: "I need assistance with my order." },
    { sender: "agent", content: "Of course! Can you provide your order number?" },  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (messages.length < conversation.length) {
        setMessages((prevMessages) => [
          ...prevMessages,
          conversation[messages.length],
        ]);
      }
    }, 2000); // Add a new message every 2 seconds

    return () => clearInterval(interval);
  }, [messages, conversation]);

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
