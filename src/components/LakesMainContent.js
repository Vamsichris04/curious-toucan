import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/LakesMainContent.css"; // Reuse styles if needed or create new CSS
import GreatLakesImage from "../assets/Great_Lakes.png";
import erieImage from "../assets/erie.png";
import huronImage from "../assets/huron.png";
import michiganImage from "../assets/michigan.png";
import ontarioImage from "../assets/ontario.png";
import superiorImage from "../assets/superior.png";

function LakesMainContent() {
    const navigate = useNavigate();
  
    const handleLakeClick = (lakeName) => {
      console.log(`You clicked on ${lakeName}`);
      alert(`You selected ${lakeName}!`);
      // Add logic to navigate or show information about the lake
    };
  
    return (
      <div
        className="great-lakes-container"
        style={{ backgroundImage: `url(${GreatLakesImage})` }}
      >
        {/* Back Button */}
        <div className="button-container">
          <button
            className="back-button"
            onClick={() => navigate("/")}
          >
            Back to Main Page
          </button>
        </div>
  
        {/* Lake Buttons */}
        <div className="map-container">
          <button
            className="lake-button superior"
            onClick={() => handleLakeClick("Superior")}
          >
            <img src={superiorImage} alt="Superior Lake" />
          </button>
          <button
            className="lake-button huron"
            onClick={() => handleLakeClick("Huron")}
          >
            <img src={huronImage} alt="Huron Lake" />
          </button>
          <button
            className="lake-button michigan"
            onClick={() => handleLakeClick("Michigan")}
          >
            <img src={michiganImage} alt="Michigan Lake" />
          </button>
          <button
            className="lake-button erie"
            onClick={() => handleLakeClick("Erie")}
          >
            <img src={erieImage} alt="Erie Lake" />
          </button>
          <button
            className="lake-button ontario"
            onClick={() => handleLakeClick("Ontario")}
          >
            <img src={ontarioImage} alt="Ontario Lake" />
          </button>
        </div>
      </div>
    );
  }
  
  export default LakesMainContent;