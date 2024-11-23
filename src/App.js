// src/App.js
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import bootstrap components
import Footer from "./components/Footer";
import "./App.css";

// import "./styles/main.css";

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
