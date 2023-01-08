import React from "react";
import lazyImg from "../assets/react-lazy-chunks.jpg";

console.log("loading page 'about'");

const About = () => {
  console.log("hello");
  return (
    <div style={{ width: "100%", alignSelf: "center" }}>
      <h2>ABOUT </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sint nam, porro eaque quam iusto incidunt esse
        doloremque! Maiores ipsum dicta laboriosam esse ipsa quae nam dolorem odio odit sit?
      </p>
      <img src={lazyImg} alt="lazyloading" width="350" />
    </div>
  );
};

export default About;
