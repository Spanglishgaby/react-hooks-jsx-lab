import React from "react";
import { image } from "../data/data";

function About() {
  return <div>About
    <div id="about">
    <h2>About Me</h2>
    <p>1,2,3 Test</p>
    <img src={image} alt="I made this"/>
  </div>;
  </div>
}

export default About;
