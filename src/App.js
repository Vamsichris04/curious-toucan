// src/App.js
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./style/main.css";

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
