// import React, { useState } from "react";
// import { database, ref, push, functions, httpsCallable } from "../firebase"; // Import Firebase setup
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import SchoolNavbar from "../components.jsx/SchoolNavbar";
// import "../styles/admission.css"

// const AdmissionForm = () => {
//   // State for form data
//   const [formData, setFormData] = useState({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     gender: "",
//     dob: "",
//     admissionClass: "",
//     relation: "",
//     fatherFirstName: "",
//     fatherLastName: "",
//     email: "",
//     phone: "",
//     education: "",
//     additionalDetails: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit Form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Save to Firebase Realtime Database
//     const studentsRef = ref(database, "admissions"); // Change path as needed
//     await push(studentsRef, formData);

//     // Call Cloud Function to Send Email
//     const sendEmailFunction = httpsCallable(functions, "sendEmail");
//     try {
//       await sendEmailFunction({
//         email: "ramanimahaveer@gmail.com",
//         subject: "New Admission Form Submitted",
//         message: `A new admission form has been submitted:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
//       });

//       alert("Form submitted successfully! Email sent.");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Failed to send email.");
//     }
//   };

//   return (
//     <>
//       <SchoolNavbar />
//       <div id="mainadmission">
//         <h1 id="admisionn">Application Form For Admission</h1>
//         <form onSubmit={handleSubmit}>
//           <div id="firstinputs">
//             <Container>
//               <Row>
//                 <Col md={4} sm={12}>
//                   <label>First Name</label>
//                   <input type="text" name="firstName" onChange={handleChange} className="roundinput" required />
//                 </Col>
//                 <Col md={4} sm={12}>
//                   <label>Middle Name</label>
//                   <input type="text" name="middleName" onChange={handleChange} className="roundinput" />
//                 </Col>
//                 <Col md={4} sm={12}>
//                   <label>Last Name</label>
//                   <input type="text" name="lastName" onChange={handleChange} className="roundinput" required />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col md={4} sm={12}>
//                   <label>Gender</label>
//                   <input type="text" name="gender" onChange={handleChange} className="roundinput" required />
//                 </Col>
//                 <Col md={4} sm={12}>
//                   <label>Date of Birth</label>
//                   <input type="date" name="dob" onChange={handleChange} className="roundinput" required />
//                 </Col>
//                 <Col md={4} sm={12}>
//                   <label>Admission To Class</label>
//                   <input type="text" name="admissionClass" onChange={handleChange} className="roundinput" required />
//                 </Col>
//               </Row>
//             </Container>
//           </div>

//           {/* Parent Information */}
//           <div id="secondinputs2">
//             <h4>*Parent/Guardian</h4>
//             <Container>
//               <Row>
//                 <Col md={4} sm={12}>
//                   <label>Choose Relation</label>
//                   <input type="text" name="relation" onChange={handleChange} className="roundinput" required />
//                 </Col>
//                 <Col md={4} sm={12}>
//                   <label>Father First Name</label>
//                   <input type="text" name="fatherFirstName" onChange={handleChange} className="roundinput" required />
//                 </Col>
//                 <Col md={4} sm={12}>
//                   <label>Father Last Name</label>
//                   <input type="text" name="fatherLastName" onChange={handleChange} className="roundinput" required />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col md={4} sm={12}>
//                   <label>Email Address</label>
//                   <input type="email" name="email" onChange={handleChange} className="roundinput" required />
//                 </Col>
//                 <Col md={4} sm={12}>
//                   <label>Phone Number</label>
//                   <input type="tel" name="phone" onChange={handleChange} className="roundinput" required />
//                 </Col>
//                 <Col md={4} sm={12}>
//                   <label>Education Qualification</label>
//                   <input type="text" name="education" onChange={handleChange} className="roundinput" required />
//                 </Col>
//               </Row>
//               <textarea name="additionalDetails" onChange={handleChange} className="form-control" rows="5" placeholder="Additional Details..."></textarea>
//             </Container>
//           </div>

//           {/* Submit Button */}
//           <div id="last-button">
//             <Container>
//               <Row>
//                 <Col className="nameee">
//                   <button type="submit" className="apply-button">Apply Now</button>
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         </form>

//         <h1 id="mainmessage">We will call or message you for an interview on your mobile number</h1>
//       </div>
//     </>
//   );
// };

// export default AdmissionForm;
import { useState, useRef } from "react";

export default function CameraMicApp() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
      setCameraOn(true);
    } catch (error) {
      console.error("Error accessing media devices", error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setStream(null);
      setCameraOn(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>React Camera & Microphone</h1>

      <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "auto" }}>
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: cameraOn ? "transparent" : "rgba(0, 0, 0, 0.6)",
          backdropFilter: cameraOn ? "none" : "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
          zIndex: "2",
        }}>
          {!cameraOn && "Camera is Off"}
        </div>

        <video ref={videoRef} autoPlay playsInline width="100%" height="400" style={{ zIndex: "1", borderRadius: "10px" }}></video>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={startCamera} style={buttonStyle}>Start Camera</button>
        <button onClick={stopCamera} style={buttonStyle}>Stop Camera</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "5px",
  cursor: "pointer",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
};

