import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SchoolNavbar from "../components.jsx/SchoolNavbar";
import { ref, get } from "firebase/database";
import { database } from "../firebase";

const Parent = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState(""); // Stores selected class (1,2,3...)

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsRef = ref(database, "students");
      const snapshot = await get(studentsRef);

      if (snapshot.exists()) {
        let allStudents = [];
        const studentsData = snapshot.val();

        // Flatten student data from all teachers
        Object.values(studentsData).forEach((teacherStudents) => {
          Object.entries(teacherStudents).forEach(([id, data]) => {
            allStudents.push({ id, ...data });
          });
        });

        // Sort students by marks (descending)
        allStudents.sort((a, b) => b.marks - a.marks);

        setStudents(allStudents);
        setFilteredStudents(allStudents.slice(0, 30)); // Show top 30 by default
      }
    };

    fetchStudents();
  }, []);

  // Function to extract only the class number (removes sections like A, B, etc.)
  const extractClassNumber = (fullClass) => {
    if (!fullClass) return ""; // Handle undefined or null class values
    return fullClass.replace(/[^0-9]/g, ""); // Keep only numbers
  };

  useEffect(() => {
    let filtered = students;

    // Apply class filter if a class is selected
    if (selectedClass) {
      filtered = filtered.filter(
        (student) => extractClassNumber(student.class || "") === selectedClass
      );
    }

    // Apply search filter if search term exists
    if (searchTerm) {
      filtered = filtered.filter(
        (student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // Show top 30 students when no search term
      filtered = filtered.slice(0, 30);
    }

    setFilteredStudents(filtered);
  }, [searchTerm, students, selectedClass]);

  return (
    <>
      <SchoolNavbar />
      <div
        className="container-fluid bg-light"
        style={{ height: "100vh", width: "80%", fontWeight: 300 }}
      >
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center my-3">
            <div>
              <h5 className="fw-light">Student Details</h5>
              <p className="text-muted">A descriptive body text comes here</p>
            </div>
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Name or Roll Number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <DropdownButton
                align="end"
                title={selectedClass || "Class"}
                id="dropdown-menu-align-end"
              >
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(
                  (cls) => (
                    <Dropdown.Item key={cls} onClick={() => setSelectedClass(cls)}>
                      {cls}
                    </Dropdown.Item>
                  )
                )}
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setSelectedClass("")}>
                  Show All
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr className="fw-light text-muted">
                  <th>SR:NO</th>
                  <th>Name &#8595;</th>
                  <th>Father Name &#8595;</th>
                  <th>Roll Number &#8595;</th>
                  <th>Obtained Marks &#8595;</th>
                  <th>Pass/Fail &#8595;</th>
                  <th>Grade &#8595;</th>
                  <th>Class</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <tr key={student.id} className="fw-light text-muted">
                      <td>{index + 1}</td>
                      <td>{student.name}</td>
                      <td>{student.fatherName}</td>
                      <td>{student.rollNumber}</td>
                      <td>{student.marks}</td>
                      <td>
                        <span
                          className={`badge ${
                            student.status === "pass" ? "bg-success" : "bg-danger"
                          }`}
                        >
                          {student.status}
                        </span>
                      </td>
                      <td>{student.grade}</td>
                      <td>{student.class || "N/A"}</td>
                      <td>
                        <button className="btn btn-outline-primary btn-sm">
                          See more
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center text-muted">
                      No students found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parent;
