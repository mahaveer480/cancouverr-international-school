import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, get } from "firebase/database"; // ✅ Import database functions
import { database } from "../firebase"; // ✅ Import your Firebase database instance

export const Firstcompont = ({ 
  scrollToHome, 
  scrollToAbout, 
  scrollToAcademics, 
  scrollToActivities, 
  scrollToContact 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(""); // ✅ Store username from database
  const [loading, setLoading] = useState(true); // ✅ Track loading state
  const navigate = useNavigate();
  const auth = getAuth(); // Firebase Auth instance

  // Fetch User Info (Auth + Database)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // ✅ User is logged in

        // ✅ Fetch Username from Database
        const userRef = ref(database, `users/${currentUser.uid}/name`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUsername(snapshot.val()); // ✅ Set Username
        } else {
          setUsername("logined"); // Default Name
        }
      } else {
        setUser(null); // ✅ No user is logged in
        setUsername(""); // Clear username
      }
      setLoading(false); // ✅ Stop loading once we have user state
    });

    return () => unsubscribe();
  }, [auth]);

  // Handle Result Button Click
  const handleResultNavigation = () => {
    if (!loading) { // ✅ Ensure loading is done before navigating
      if (user) {
        navigate("/teacher"); // ✅ If signed in, go to /teacher
      } else {
        navigate("/parent"); // ✅ If not signed in, go to /parent
      }
    }
  };

  return (
    <div id="main">
      <div id="backgroundimage">
        {/* Navbar */}
        <Navbar bg="dark" id="dark" expand="lg" data-bs-theme="dark">
          <Container id="me-auto">
            <Navbar.Brand href="#home" className="text-white">My School</Navbar.Brand>

            {/* ☰ Menu Button (For Mobile View) */}
            <Button id="sidebar-button" className='links' onClick={() => setSidebarOpen(true)}>
              ☰ Menu
            </Button>

            {/* Navbar Links (Hidden on Small Screens) */}
            <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
              <Nav className="me-auto">
                <Nav.Link onClick={scrollToHome}><p id="white">Home</p></Nav.Link>
                <Nav.Link onClick={scrollToAbout}><p id="white">About Us</p></Nav.Link>
                <Nav.Link onClick={scrollToAcademics}><p id="white">Academic</p></Nav.Link>
                <Nav.Link onClick={scrollToActivities}><p id="white">Activities</p></Nav.Link>
                <Nav.Link><Link className="links" to="/attendance">Attendance</Link></Nav.Link>
                <Nav.Link><Link className="links" to="/result">Result</Link></Nav.Link>
              </Nav>

              {/* ✅ Login Button OR Username */}
              {loading ? (
                <Button variant="outline-light" disabled>Loading...</Button>
              ) : user ? (
                <Button variant="outline-light" disabled>{username}</Button>
              ) : (
                <Button variant="outline-light" onClick={() => navigate("/login")}>Login</Button>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Sidebar (Appears when ☰ is clicked) */}
        {sidebarOpen && (
          <div className="sidebar">
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>✖</button>
            <Nav>
              <Nav.Link onClick={() => setSidebarOpen(false)}>Home</Nav.Link>
              <Nav.Link onClick={() => setSidebarOpen(false)}>About Us</Nav.Link>
              <Nav.Link onClick={() => setSidebarOpen(false)}>Academic</Nav.Link>
              <Nav.Link onClick={() => setSidebarOpen(false)}>Activities</Nav.Link>
              <Nav.Link><Link className="links" to="/attendance">Attendance</Link></Nav.Link>
              <Nav.Link><Link className="links" to="/result">Result</Link></Nav.Link>
              
              {/* ✅ Sidebar Login Button OR Username */}
              {loading ? (
                <Button variant="outline-dark" disabled>Loading...</Button>
              ) : user ? (
                <Button variant="outline-dark" disabled>{username}</Button>
              ) : (
                <Button variant="outline-dark" onClick={() => navigate("/login")}>Login</Button>
              )}
            </Nav>
          </div>
        )}

        {/* Contact Section */}
        <div id="contact">
          <h1 id='joinus'>Join Us</h1>
          <h1>Where Learning Meets Excellence</h1>
          <p>One of the most prominent educational institutions in the world</p>

          <Link to={"/admission"}>  
            <button id='Admissions'>ADMISSIONS</button>
          </Link>

          {/* Result Button with Conditional Navigation */}
          <button id='result' onClick={handleResultNavigation} disabled={loading}>
            {loading ? "Checking..." : "RESULT"}
          </button>
        </div>
      </div>
    </div>
  );
};
