import React from 'react';
import { useState,useRef,useEffect } from 'react';
import schoolimage from '../styles/SCHOOL IMAGE.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import '../styles/footer.css';

export const Footer = ({ 
  scrollToHome, 
  scrollToAbout, 
  scrollToAcademics, 
  scrollToActivities, 
  scrollToContact 
}) => {

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
    <div className="footer-container">
      {/* First Section */}
      <div className="footer-top">
        <div className="footer-logo"><img src={schoolimage} alt="School Logo" /></div>
        
        <div className="footer-column">
          <h6>Courses</h6>
          <p>Primary Years Programme</p>
          <p>Middle Years Programme</p>
          <p>Diploma Programme</p>
        </div>

        <div className="footer-column">
          <h6>Resources</h6>
          <p>Smart classes</p>
          <p>Library</p>
          <p>Sports</p>
          <p>Auditoriums and Halls</p>
        </div>

        <div className="footer-column">
          <h6>About Us</h6>
          <p onClick={scrollToActivities}>Contact</p>
          <p>Help/Support</p>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Mahaveer Ramani. All rights reserved.</p>
       <div id="spacee">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
        <div className="footer-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
        </div>
      </div>
    </div>
  );
};
