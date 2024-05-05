// BaffleText.js
import React, { useEffect } from "react";
import "./css.css";
const TopText = ({ text, characters, speed, revealDuration }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/baffle@0.3.6/dist/baffle.min.js";
    script.async = true;

    script.onload = () => {
      const baffleInstance = window.baffle(".data");
      baffleInstance.set({
        characters,
        speed,
      });
      baffleInstance.start();
      baffleInstance.reveal(revealDuration);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [text, characters, speed, revealDuration]);

  return (
    <div className="data">
      <p>{text}</p>
    </div>
  );
};

export default TopText;
