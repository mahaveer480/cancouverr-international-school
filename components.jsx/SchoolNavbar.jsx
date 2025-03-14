import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/schoolnavbar.css";

const SchoolNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const navigate = useNavigate(); // ✅ Move useNavigate() to the top

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar expand="lg" className="px-3" style={{ background: "rgba(0, 0, 0, 0)", backdropFilter: "blur(5px)" }}>
        <Container fluid>
          <Navbar.Brand href="/" className="text-white">My School</Navbar.Brand>

          {isMobile ? (
            <Button variant="outline-light" onClick={() => setSidebarOpen(true)}>☰</Button>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="text-white">About Us</Nav.Link>
              <Nav.Link as={Link} to="/attendance" className="text-white">Attendance</Nav.Link>
              <Nav.Link as={Link} to="/result" className="text-white">Result</Nav.Link>
              {/* ✅ Fix the button: Use an arrow function */}
              <Button variant="outline-light" className="ms-3" onClick={() => navigate("/login")}>Login</Button>
            </Nav>
          )}
        </Container>
      </Navbar>

      {/* Sidebar Offcanvas for Mobile */}
      <Offcanvas show={sidebarOpen} onHide={() => setSidebarOpen(false)} placement="end" className="bg-dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-white">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/home" className="text-white" onClick={() => setSidebarOpen(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/academic" className="text-white" onClick={() => setSidebarOpen(false)}>Academic</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="text-white" onClick={() => setSidebarOpen(false)}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/activities" className="text-white" onClick={() => setSidebarOpen(false)}>Activities</Nav.Link>
            <Nav.Link as={Link} to="/attendance" className="text-white" onClick={() => setSidebarOpen(false)}>Attendance</Nav.Link>
            <Nav.Link as={Link} to="/result" className="text-white" onClick={() => setSidebarOpen(false)}>Result</Nav.Link>
            {/* ✅ Fix the button inside Offcanvas */}
            <Button variant="outline-light" className="mt-3" onClick={() => navigate("/login")}>Login</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SchoolNavbar;
