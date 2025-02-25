import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [

          "Master's Student @ USC",
          "Ex-SDE Intern @ Amazon",
          "Tech Startup Engineer @ GreatPods",
          "Actively Seeking Full-Time Opportunities",
          "MERN Stack Developer",
          "Software Developer",
          "AI & ML Enthusiast",
          "Building Scalable Systems",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;