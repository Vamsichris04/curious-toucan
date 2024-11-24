import React, {useState} from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MascotStuff from "./components/Mascots";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en"); // Default language is English

  // Handle language change
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="app">
      <MainContent onLanguageClicked />
    </div>
  );
}

export default App;
