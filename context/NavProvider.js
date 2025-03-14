import React from "react";
import { NavProvider } from "./context/NavContext"; // Import Context Provider
import Home from "./pages/home";

const App = () => {
  return (
    <NavProvider>
      <Home />
    </NavProvider>
  );
};

export default App;
