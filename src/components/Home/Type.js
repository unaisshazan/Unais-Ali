import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Entrepreneur",
          "Electronics Engineer",
          "Web Developer",
          "Software Developer",
          "Python & Js Expert"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
