import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../styles/admission.css";
import SchoolNavbar from "../components.jsx/SchoolNavbar";

const AdmissionForm = () => {
  return (
    <>

    <SchoolNavbar/> 
      <div id="mainadmission">
        <h1 id="admisionn">Application Form For Admission</h1>

        {/* Student Information */}
        <div id="firstinputs">
          <Container>
            <Row>
              <Col md={4} sm={12}>
                <label>First Name</label>
                <input type="text" className="roundinput" />
              </Col>
              <Col md={4} sm={12}>
                <label>Middle Name</label>
                <input type="text" className="roundinput" />
              </Col>
              <Col md={4} sm={12}>
                <label>Last Name</label>
                <input type="text" className="roundinput" />
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12}>
                <label>Gender</label>
                <input type="text" className="roundinput" />
              </Col>
              <Col md={4} sm={12}>
                <label>Date of Birth</label>
                <input type="date" className="roundinput" />
              </Col>
              <Col md={4} sm={12}>
                <label>Admission To Class</label>
                <input type="text" className="roundinput" />
              </Col>
            </Row>
          </Container>
        </div>

        {/* Parent/Guardian Information */}
        <div id="secondinputs2">
          <h4>*Parent/Guardian</h4>
          <Container>
            <Row>
              <Col md={4} sm={12}>
                <label>Choose Relation</label>
                <input type="text" className="roundinput" />
              </Col>
              <Col md={4} sm={12}>
                <label>Father First Name</label>
                <input type="text" className="roundinput" />
              </Col>
              <Col md={4} sm={12}>
                <label>Father Last Name</label>
                <input type="text" className="roundinput" />
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12}>
                <label>Email Address</label>
                <input type="email" className="roundinput" />
              </Col>
              <Col md={4} sm={12}>
                <label>Phone Number</label>
                <input type="tel" className="roundinput" />
              </Col>
              <Col md={4} sm={12}>
                <label>Education Qualification</label>
                <input type="text" className="roundinput" />
              </Col>
            </Row>
            <textarea className="form-control" rows="5" placeholder="Additional Details..."></textarea>
          </Container>
        </div>

        {/* File Upload Section */}
        <div id="firstinputs">
          <Container>
            <Row>
              <Col md={4} sm={12}>
                <label>Student Photo</label>
                <input type="file" className="roundinput-file" />
              </Col>
              <Col md={4} sm={12}>
                <label>Birth Certificate</label>
                <input type="file" className="roundinput-file" />
              </Col>
              <Col md={4} sm={12}>
                <label>B-Form</label>
                <input type="file" className="roundinput-file" />
              </Col>
            </Row>
          </Container>
        </div>

        {/* Submit Button */}
        <div id="last-button">
          <Container>
            <Row>
              <Col className="nameee">
                <button className="apply-button">Apply Now</button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Final Message */}
        <h1 id="mainmessage">We will call or message you for an interview on your mobile number</h1>
      </div>
    </>
  );
};

export default AdmissionForm;
