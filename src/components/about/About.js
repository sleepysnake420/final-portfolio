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
            Hello! I am Sleepysnake420. Welcome to my CSCI-1300 (UI/UX) Final
            Portfolio!
          </h1>
          <h2 className="about-text-h2">
            Follow me as I take you through the course I took at Brown
            University, where we started with the theory of user interaction and
            object design, then moved on to learning how to conceptualize and
            create user models, looked at user testing paradigms, and finally
            spent a lot of time working with various prototyping techniques,
            software, and actual web development.
          </h2>
          <h3 className="about-text-h3">
            Explore the tabs to see end-to-end projects on re-design,
            responsiveness, and React programming as well as numerous iterative
            prototyping techniques.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
