import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Navbar expand="lg" expanded={expanded} className="header" fixed="top">
        <div className="container">
          <Navbar.Brand href="/" className="navbar-brand">
            <h2 className="text-white"><strong>Melody<span className="brand-highlight">Verse</span></strong></h2>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />

          <Navbar.Collapse id="navbar-nav text-white">
            <Nav className="navbar-center ">
              <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="/login" onClick={() => setExpanded(false)}>
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup" onClick={() => setExpanded(false)}>
                Register
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar></div>
  )
}

export default Header;