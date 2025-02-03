import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import bgImage from '../styles/2.jpg';




export const Firstcompont = () => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navbarRef = useRef(null);
  const pagesRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (navbarRef.current && pagesRef.current) {
        const navbarWidth = navbarRef.current.offsetWidth;
        const pagesWidth = pagesRef.current.scrollWidth;
        setIsOverflowing(pagesWidth > navbarWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
<div id="main" style={{
      
    }}>




 

      <div id="backgroundimage">
        <div id="navbar" ref={navbarRef}>
          <Navbar bg="dark" id="dark" expand="lg" data-bs-theme="dark">
            <Container id="me-auto">

              <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Brand href="#home" className="text-white">My School</Navbar.Brand>
              
              {isOverflowing && (
                <Button id="sidebar-button" onClick={() => setSidebarOpen(true)}>
                  ☰ Menu
                </Button>
              )}
                <Nav className="me-auto" ref={pagesRef}>
                  <Nav.Link><Link className="links" to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link className="links" to="/academic">Academic</Link></Nav.Link>
                  <Nav.Link><Link className="links" to="/about-us">About Us</Link></Nav.Link>
                  <Nav.Link><Link className="links" to="/activities">Activities</Link></Nav.Link>
                  <Nav.Link><Link className="links" to="/attendance">Attendance</Link></Nav.Link>
                  <Nav.Link><Link className="links" to="/result">Result</Link></Nav.Link>
                </Nav>
                <Button variant="outline-light">Contact Us</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="sidebar">
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>✖</button>
            <Nav>
              <Nav.Link><Link className="links" to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className="links" to="/academic">Academic</Link></Nav.Link>
              <Nav.Link><Link className="links" to="/about-us">About Us</Link></Nav.Link>
              <Nav.Link><Link className="links" to="/activities">Activities</Link></Nav.Link>
              <Nav.Link><Link className="links" to="/attendance">Attendance</Link></Nav.Link>
              <Nav.Link><Link className="links" to="/result">Result</Link></Nav.Link>
            </Nav>
          </div>
        )}

        <div>
        <div id="contact">
    <h1 id='joinus'>Join Us</h1>
    <h1>Where Learning Meets Excellence</h1>
    <p>One of the most prominent educational institution of the world</p>

    <button id='Admissions'>ADMISSIONS</button>
    <button id='result'>RESULT</button>
  </div>
        </div>
      </div>
    </div>
  );
};
