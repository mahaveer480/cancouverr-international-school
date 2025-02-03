// Navbar.js
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css'
 
export const Navbar = () => {
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
    <div id="navbar" ref={navbarRef}>
      <Navbar id="dark" >
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
    </div>
  );
};
