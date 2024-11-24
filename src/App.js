import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import LakesMainContent from "./components/LakesMainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Header with Link */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/great-lakes" element={<LakesMainContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
