import React, { useRef } from "react";
import { Firstcompont } from "../components.jsx/firstcompont";
import { Introdaction } from "../components.jsx/introdaction";
import { Acadmics } from "../components.jsx/acadmics";
import { Activites } from "../components.jsx/activites";
import Contact from "../components.jsx/contact";
import { Footer } from "../components.jsx/footer";

const Home = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const academicsRef = useRef(null);
  const activitiesRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Pass scroll functions to Firstcompont (Navbar) */}
      <Firstcompont 
      ref={homeRef}
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToAcademics={() => scrollToSection(academicsRef)}
        scrollToActivities={() => scrollToSection(activitiesRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        scrollTofooter={() => scrollToSection(footerRef)}

      />  

      {/* Sections with Refs */}
     

      <div ref={aboutRef}>
        <Introdaction />
      </div>

      <div ref={academicsRef}>
        <Acadmics />
      </div>

      <div ref={activitiesRef}>
        <Activites />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer ref={footerRef} />
    </div>
  );
};

export default Home;
