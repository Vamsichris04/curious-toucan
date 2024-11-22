import React, { useState } from "react";
import axios from "axios";

const MainContent = () => {
  const [response, setResponse] = useState("Welcome to Curious Toucan!");
  const [category, setCategory] = useState("");

  const fetchResponse = async (query) => {
    try {
      const result = await axios.post("YOUR_API_ENDPOINT", { category: query });
      setResponse(result.data.message); // Adjust based on API response structure
    } catch (error) {
      setResponse("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="main-content">
      <div className="response-bubble">
        <p>{response}</p>
      </div>
      <div className="button-container">
        <button onClick={() => fetchResponse("physics")}>Physics</button>
        <button onClick={() => fetchResponse("biology")}>Biology</button>
        <button onClick={() => fetchResponse(category)}>Give me more details!</button>
        <button onClick={() => fetchResponse(category)}>Give me more like this!</button>
      </div>
    </main>
  );
};

export default MainContent;
