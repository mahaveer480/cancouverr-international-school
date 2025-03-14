import React, { createContext, useContext, useRef } from "react";

// Create Context
const NavContext = createContext();

export const NavProvider = ({ children }) => {
  // Create refs for different sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const academicsRef = useRef(null);
  const activitiesRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll smoothly
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <NavContext.Provider
      value={{ homeRef, aboutRef, academicsRef, activitiesRef, contactRef, scrollToSection }}
    >
      {children}
    </NavContext.Provider>
  );
};

// Custom hook to use context
export const useNav = () => useContext(NavContext);
