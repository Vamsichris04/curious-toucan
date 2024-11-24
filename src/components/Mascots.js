import React, { useState } from "react";
import "../style/MainContent.css";
import "../style/Toucan.css";
import "../style/Mascots.css";
 
function MascotStuff() {
  const [message, setMessage] = useState(
    "Hello there, adventurers! I'm Curious Toucan, and I'm so excited to see you at Discovery World! Let’s get curious together—tou-can do it!"
  );
 
  return (
    <main className="mascot-stuff">
        <button onClick={() => setMessage("Translate functionality coming soon!")}>TRANSLATE THIS</button>
        <button onClick={() => setMessage("Challenge accepted! Making it harder...")}>MAKE IT HARDER</button>
        <button onClick={() => setMessage("Simplifying things for you...")}>MAKE IT EASIER</button>
        <button onClick={() => setMessage("Explore related topics!")}>RELATED TOPICS</button>
    </main>
  );
}
 
export default MascotStuff;
