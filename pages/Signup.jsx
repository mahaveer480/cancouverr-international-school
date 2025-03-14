import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set, get } from "firebase/database"; // Import database functions
import { auth, database } from "../firebase";
import "../styles/login-signup.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [classTeacher, setClassTeacher] = useState("");
  const [section, setSection] = useState(""); // New state for section
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!classTeacher || !section) {
      alert("Please select both class and section.");
      return;
    }

    try {
      const classRef = ref(database, `users`);
      const snapshot = await get(classRef);

      if (snapshot.exists()) {
        const usersData = snapshot.val();
        for (const userId in usersData) {
          const user = usersData[userId];
          if (user.classTeacher === classTeacher && user.section === section) {
            alert(`This class (${classTeacher}) and section (${section}) already has a class teacher.`);
            return;
          }
        }
      }

      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional data in Firebase Realtime Database
      await set(ref(database, "users/" + user.uid), {
        name: name,
        email: email,
        classTeacher: classTeacher,
        section: section,
      });

      navigate("/"); // Redirect to dashboard after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="main2">
      <div id="login">
        <h2>Signup</h2>
        {error && <p className="error">{error}</p>}
        
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <label htmlFor="classTeacher">Class Teacher of:</label>
        <select id="classTeacher" value={classTeacher} onChange={(e) => setClassTeacher(e.target.value)}>
          <option value="">Select Class</option>
          <option value="Class 1">Class 1</option>
          <option value="Class 2">Class 2</option>
          <option value="Class 3">Class 3</option>
          <option value="Class 4">Class 4</option>
          <option value="Class 5">Class 5</option>
          <option value="Class 6">Class 6</option>
          <option value="Class 7">Class 7</option>
          <option value="Class 8">Class 8</option>
          <option value="Class 9">Class 9</option>
          <option value="Class 10">Class 10</option>
          <option value="Class 11">Class 11</option>
          <option value="Class 12">Class 12</option>
        </select>

        <label htmlFor="section">Section:</label>
        <select id="section" value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="">Select Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        
        <button id="button" onClick={handleSignup}>Sign up</button>
        
        <div id="down">
          Already have an account? <Link to={"/login"}><b>Login now</b></Link>
        </div>
      </div>
    </div>
  );
}
