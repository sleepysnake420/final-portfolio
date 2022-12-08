import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

import "./MainNav.css";

function BasicExample(props) {
  const activeKey = props.activeKey;
  const handleSelect = props.handleSelect;

  console.log("activeKey: ", activeKey);

  return (
    <div>
      <Nav className="nav-style">
        <Nav.Item className="nav-item-style">
          <h2 className="logo-text">UI/UX Portfolio</h2>
        </Nav.Item>
      </Nav>
      <Nav
        // set active key to the current page
        onSelect={(selectedKey) => handleSelect(selectedKey)}
        activeKey={activeKey}
        className="nav-2-style"
        variant="tabs"
        fill
      >
        <Nav.Item className="nav-2-item-style">
          <Nav.Item className="nav-2-item-style">
            <Nav.Link eventKey="/about">About</Nav.Link>
          </Nav.Item>
        </Nav.Item>
        <Nav.Item className="nav-2-item-style">
          <Nav.Link eventKey="/prototypes">Prototypes</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-2-item-style">
          <Nav.Link eventKey="/projects">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default BasicExample;
