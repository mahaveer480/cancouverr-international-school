import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"
import "../styles/login-signup.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to dashboard after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="main2">
      <div id="login">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>} {/* Show errors */}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p id="forgot">Forgot Password?</p>
        <button id="button" onClick={handleLogin}>Sign in</button>
        {/* <div id="down">
          Don't have an account? <Link to={"/signup987234"}><b>Register for free</b></Link>
        </div> */}
      </div>
    </div>
  );
}
