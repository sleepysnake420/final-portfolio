import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <Nav className="footer-style">
        <Nav.Item className="footer-item-style">
          {/* <h3 className="footer-text">
            Images, icons, and backgrounds generated using{" "}
            <a href="https://openai.com/dall-e-2/" target="_blank">
              DALL·E 2
            </a>
          </h3> */}
          <h3 className="footer-text">
            Images, icons, and backgrounds generated using DALL·E 2
          </h3>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Footer;
