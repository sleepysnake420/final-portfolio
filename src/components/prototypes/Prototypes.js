import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import StoryboardLogo from "../../assets/images/storyboardlogo.png";
import StoryBoard from "../../assets/images/storyboard.png";
import EmpathyLogo from "../../assets/images/empathylogo.png";
import EmpathyMap from "../../assets/images/empathy.png";
import LowFiLogo from "../../assets/images/lowfilogo2.png";
import LowFi from "../../assets/images/lowfi.png";
import HighFiLogo from "../../assets/images/venmologo4.png";
import HighFi from "../../assets/images/hifi.png";
import PlamazonLogo from "../../assets/images/plamazonlogo.png";
import Plamazon from "../../assets/images/plamazon.png";
import BakeryLogo from "../../assets/images/bakerylogo.png";
import ABTest from "../../assets/images/abtest.png";
import RedesignLogo from "../../assets/images/responsivelogo.png";
import Redesign from "../../assets/images/redesign.png";
import InteractiveLogo from "../../assets/images/interactivelogo.png";
import "./Prototypes.css";

function Prototypes(props) {
  const isShown = props.isShown;

  if (!isShown) {
    return null;
  }

  return (
    <div className="prototype-container">
      <Card className="card-child" bg="light">
        <Card.Img variant="top" src={StoryboardLogo} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">Storyboarding</Card.Title>
          <Card.Text className="card-text">
            Storyboarding is the process of creating a sequence of illustrations
            or images that represent the different scenes of a story.
          </Card.Text>
          <Card.Text className="card-text-2">
            In an effort to illustrate potential problems caused by the design
            of the machine, I prepared a storyboard that shows a user
            interacting with the Atlantic Coffee Machine in the CIT.
          </Card.Text>
          <a href={StoryBoard} target="_blank" rel="noreferrer">
            <Button variant="dark" className="card-button">
              View Storyboard
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child">
        <Card.Img variant="top" src={EmpathyLogo} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">Empathy Map</Card.Title>
          <Card.Text className="card-text">
            An empathy map is a tool that helps people understand the
            perspectives and experiences of others.
          </Card.Text>
          <Card.Text className="card-text-2">
            I created an empathy map that depicts two different consumers'
            points of view while they use the Atlantic Coffee Machine. One has
            more experience than the other.
          </Card.Text>
          <a href={EmpathyMap} target="_blank" rel="noreferrer">
            <Button variant="dark" className="card-button">
              View Empathy Map
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child">
        <Card.Img variant="top" src={LowFiLogo} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">Low-Fidelity Mockup</Card.Title>
          <Card.Text className="card-text">
            A low-fidelity mockup is a rough, early draft version of a design or
            user interface. They are used to quickly test and iterate on ideas
          </Card.Text>
          <Card.Text className="card-text-2">
            We designed a low-fidelity version of the website for the Brown
            On-Call shuttle service in pairs. We used Balsamic to create it
            while considering design tweaks that would enhance the user
            experience.
          </Card.Text>
          <a href={LowFi} target="_blank" rel="noreferrer">
            <Button variant="dark" className="card-button">
              View Low-Fi Mockup
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child">
        <Card.Img variant="top" src={HighFiLogo} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">High-Fidelity Mockup</Card.Title>
          <Card.Text className="card-text">
            A high-fidelity mockup is a detailed and realistic representation of
            a product or user interface.
          </Card.Text>
          <Card.Text className="card-text-2">
            We were given the assignment at a studio session to select a
            well-known application and recreate the design of it as a
            high-fidelity prototype using Figma. For this assignment, Venmo was
            selected.
          </Card.Text>
          <a href={HighFi} target="_blank" rel="noreferrer">
            <Button variant="dark" className="card-button">
              View Hi-Fi Mockup
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child">
        <Card.Img variant="top" src={PlamazonLogo} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">Figma</Card.Title>
          <Card.Text className="card-text">
            Figma is a design and prototyping tool that allows teams to create,
            share, and edit designs in a web-based interface.
          </Card.Text>
          <Card.Text className="card-text-2">
            We created our very own version of Amazon, but for planets, as part
            of the same studio session as we proceeded to explore Figma. This
            high-fidelity prototype is known as Plamazon.
          </Card.Text>
          <a href={Plamazon} target="_blank" rel="noreferrer">
            <Button variant="dark" className="card-button">
              View Plamazon
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child">
        <Card.Img variant="top" src={BakeryLogo} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">A/B Testing</Card.Title>
          <Card.Text className="card-text">
            A/B testing is a statistical method of comparing two different
            versions of something to see which one performs better.
          </Card.Text>
          <Card.Text className="card-text-2">
            We divided into two teams of two and created two distinct websites
            for bakeries. The two versions were then put to the test using user
            testing and eye-tracking data.
          </Card.Text>
          <a href={ABTest} target="_blank" rel="noreferrer">
            <Button variant="dark" className="card-button">
              View Version A
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child">
        <Card.Img variant="top" src={RedesignLogo} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">Responsive Redesign</Card.Title>
          <Card.Text className="card-text">
            Website responsiveness refers to the ability of a website to adapt
            its layout and function to different screen sizes and devices. Web
            developers make use of flexible grid-based layouts, images, and CSS
            media queries.
          </Card.Text>
          <Card.Text className="card-text-2">
            Here, I chose the website of one of my favorite pubs in Providence,{" "}
            <a href="http://wildcolonial.com/">Wild Colonial Tavern</a>. I
            re-designed the website to be more responsive and user-friendly. In
            the Projects tab, there is also a link to the deployed version.
          </Card.Text>
          <a href={Redesign} target="_blank" rel="noreferrer">
            <Button variant="dark" className="card-button">
              View Redesign
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child">
        <Card.Img variant="top" src={InteractiveLogo} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">Interactive Prototype</Card.Title>
          <Card.Text className="card-text">
            Interactive prototyping is a design technique that involves creating
            a working model of a product or system to test and explore its
            potential features and functionality.
          </Card.Text>
          <Card.Text className="card-text-2">
            We were required to select a startup from the{" "}
            <a href="https://www.ycombinator.com/launches">YCombinator</a>{" "}
            website for this project. We used Figma to develop an interactive
            prototype of the startup's objectives after simply reading the main
            points of the model.
          </Card.Text>
          <a
            href={
              "https://www.figma.com/proto/1nShC6CDA7Wp7CebVq3dwt/a4?page-id=0%3A1&node-id=1%3A2&viewport=188%2C432%2C0.1&scaling=scale-down&starting-point-node-id=1%3A2"
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="dark" className="card-button">
              Vizzly Prototype
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Prototypes;
