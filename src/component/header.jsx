import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser
  } from "react-icons/ai";
  import { CgFileDocument } from "react-icons/cg";

function Header(){

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (

    <Navbar
    expanded={expand}
    className={navColour ? "sticky" : "navbar"}
    fixed="top" 
    expand="md"
    >
      <Container className="nav-container">
        <Navbar.Brand href="/" className="d-flex" style={{color:'green', fontSize:"2rem", fontWeight:"bold"}}>
         BS.
        </Navbar.Brand>
      <Navbar.Toggle style={{BackgroundColor:"white"}}
          aria-controls="responsive-navbar-nav"   onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}>
           
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item  className="navLinks">
              <Nav.Link 
              as={Link}
               to="/"
              onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="navLinks">
              <Nav.Link
                 as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} />About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="navLinks">
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;