import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import CoffeeLogo from "../../assets/images/coffeelogo.png";
import TavernLogo from "../../assets/images/tavernlogo.png";
import VizzlyLogo from "../../assets/images/vizzlylogo3.png";
import PoliticiansLogo from "../../assets/images/politicianslogo.png";
import "./Projects.css";

function Projects(props) {
  const isShown = props.isShown;

  if (!isShown) {
    return null;
  }

  return (
    <div className="prototype-container-project">
      <Card className="card-child-project" bg="light">
        <Card.Img
          variant="top"
          src={CoffeeLogo}
          className="card-image-project"
        />
        <Card.Body>
          <Card.Title className="card-title">
            Personas & Storyboarding
          </Card.Title>
          <Card.Text className="card-text">
            For this project, I observed real users interacting with an
            interface, interviewed these individuals about their experiences,
            created personas based on these users, and illustrated a storyboard
            for one of their personas.
          </Card.Text>
          <Card.Text className="card-text-2">
            The Atlantic coffee machine is located at the 4th floor on 115
            Waterman Street in The Thomas J. Watson Sr. Center for Information
            Technology (CIT), Providence. This was the interface I selected.
          </Card.Text>
          <a
            href={"https://sleepysnake420.github.io/1300-assignment-1/"}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="dark" className="card-button-project">
              Visit Website
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child-project">
        <Card.Img
          variant="top"
          src={TavernLogo}
          className="card-image-project"
        />
        <Card.Body>
          <Card.Title className="card-title">Responsive Redesign</Card.Title>
          <Card.Text className="card-text">
            The goal of this project was to redesign a simple website. I
            analyzed and identified flaws in an existing interface, create
            low-fidelity and high-fidelity prototypes for various screen sizes,
            and built a responsive website based on those prototypes.
          </Card.Text>
          <Card.Text className="card-text-2">
            I chose the website of one of my favorite pubs,{" "}
            <a href="http://wildcolonial.com/">Wild Colonial Tavern</a>. I
            re-designed the website to be more responsive and user-friendly. In
            the Projects tab, there is also a link to the deployed version.
          </Card.Text>
          <a
            href={
              "https://sleepysnake420.github.io/1300-assignment-2/reponsive.html"
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="dark" className="card-button-project">
              Visit Website
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child-project">
        <Card.Img
          variant="top"
          src={VizzlyLogo}
          className="card-image-project"
        />
        <Card.Body>
          <Card.Title className="card-title">Iterative Design</Card.Title>
          <Card.Text className="card-text">
            For this project, we worked in a group to design an interactive
            interface for an emerging startup. Our group went through the full
            process of mocking up a solution to the startup's concept. We chose
            the startup <a href="https://www.vizzly.co/">Vizzly</a>
          </Card.Text>
          <Card.Text className="card-text-2">
            This assignment consisted of: (1) sketching ideas of the interface,
            (2) creating an interactive, high-fidelity prototype, (3) conducting
            user testing on a final, revised prototype, and (4) contacting the
            startup.
          </Card.Text>
          <a
            href={"https://sleepysnake420.github.io/1300-assignment-3/"}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="dark" className="card-button-project">
              Visit Website
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card-child-project">
        <Card.Img
          variant="top"
          src={PoliticiansLogo}
          className="card-image-project"
        />
        <Card.Body>
          <Card.Title className="card-title">Development</Card.Title>
          <Card.Text className="card-text">
            React is a JavaScript library developed by Facebook, for building
            user interfaces. For this project, we used React to develop an
            interactive interface, use interface components, and tie the
            components to an internal data state.
          </Card.Text>
          <Card.Text className="card-text-2">
            I decided to make a list of elected officials that includes the
            total amount of votes they all earned. Filtering, sorting, the
            elements of item cards, and a deployment plan were some other
            features that needed to be implemented.
          </Card.Text>
          <a
            href={"https://sleepysnake420.github.io/1300-react-development/"}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="dark" className="card-button-project">
              Visit Website
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Projects;
