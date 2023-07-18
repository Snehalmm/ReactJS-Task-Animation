import React, { useEffect } from "react";

export default function WaveAnimation() {

  useEffect(()=>{
    function createBubbles() {
      const container = document.getElementById("bubbleContainer");

      const numBubbles = 15; // Adjust the number of bubbles as needed
      const bubbleAnimationDuration = 5; // Animation duration in seconds

      for (let i = 0; i < numBubbles; i++) {
        const leftPosition = Math.random() * 100; // Random left position between 0% and 100%
        const animationDelay = Math.random() * bubbleAnimationDuration; // Random animation delay

        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = leftPosition + "%";
        bubble.style.animationDelay = animationDelay + "s";

        container.appendChild(bubble);
      }
    }

    createBubbles();
  }, [])
  return (
    <>
      <div className="wave-container" id="bubbleContainer">

      <svg
        className="wave-svg"
        id="waveSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
      >
        <path
          id="waveSVGPath"
          className="wave-path"
          d="M0,100 C50,80 150,120 200,100 C250,80 350,120 400,100 C450,80 550,120 600,100 C650,80 750,120 800,100 V200 H0 Z"
        ></path>
      </svg>
    </div>
    </>
  
  );
}
