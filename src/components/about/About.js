import React, { useState, useEffect } from "react";
import Image1 from "../../assets/images/image1.jpeg";
import Image2 from "../../assets/images/image2.jpeg";
import Image3 from "../../assets/images/image3.jpeg";
import Image4 from "../../assets/images/image4.png";
import Image5 from "../../assets/images/image5.png";
import Image6 from "../../assets/images/image6.png";
import Logo1 from "../../assets/images/logo1m.png";
import Logo2 from "../../assets/images/logo2m.png";
import Logo3 from "../../assets/images/logo3m.png";

import "./About.css";

function About(props) {
  const isShown = props.isShown;
  const [logo, setLogo] = useState(Logo1);

  useEffect(() => {
    // select one out of three logos at random
    const logos = [Logo1, Logo2, Logo3];
    const randomLogo = logos[Math.floor(Math.random() * logos.length)];
    setLogo(randomLogo);
  }, []);

  if (!isShown) {
    return null;
  }

  return (
    <div className="main-container">
      <div
        style={{
          height: "auto",
        }}
        className="about-container"
      >
        <div className="about-logo-div">
          <img src={logo} alt="Logo" className="about-logo" />
        </div>
        <div className="about-text-div">
          <h1 className="about-text-h1">
            Sleepysnake420 <br></br> UI/UX Developer & Designer based in
            Providence, RI.
          </h1>
          <h2 className="about-text-h2">
            A portfolio comprising of projects on responsiveness, redesign,
            React programming, and a variety of iterative prototyping methods.
          </h2>
          <h3 className="about-text-h3">
            Follow my journey through the course I took at Brown University,
            where we started with the theory of user interaction and object
            design, moved on to learning how to conceptualize and create user
            models, looked at user testing paradigms, and finally spent time
            working on various prototyping techniques, frameworks, and core web
            development.
          </h3>
          <h3 className="about-text-h3">
            I try to blend my love of dark color palettes, abstract artwork, and
            AI generated content in order to create a unique narrative.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
