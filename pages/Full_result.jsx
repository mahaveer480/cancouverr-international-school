import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase authentication
import Navbar from "../components.jsx/navbar1";
import SchoolNavbar from "../components.jsx/SchoolNavbar";

export default function Full_result() {
  const [user, setUser] = useState(null); // State to store user info
  const navigate = useNavigate();
  const auth = getAuth(); // Firebase Auth instance

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup the listener
  }, [auth]);

  const handleNavigation = () => {
    if (user) {
      navigate("/teacher"); // ✅ If user is logged in, go to /teacher
    } else {
      navigate("/parent"); // ✅ If user is NOT logged in, go to /parent
    }
  };

  return (
    <div style={{ backgroundColor: "gray", padding: "20px", textAlign: "center" }}>
      <SchoolNavbar />
      <h2>Full Result</h2>
      <button onClick={handleNavigation} style={{ padding: "10px", margin: "10px", fontSize: "16px" }}>
        Go to Dashboard
      </button>
    </div>
  );
}
