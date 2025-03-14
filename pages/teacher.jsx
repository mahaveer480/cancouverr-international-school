import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Modal, Dropdown } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import SchoolNavbar from "../components.jsx/SchoolNavbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, get, push, set, remove, update } from "firebase/database";
import { database } from "../firebase";

const Teacher = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [teacherName, setTeacherName] = useState("");
  const [teacherClass, setTeacherClass] = useState("");
  const [teacherSection, setTeacherSection] = useState("");
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    fatherName: "",
    rollNumber: "",
    marks: "",
  });

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setAuthenticated(true);

        const userRef = ref(database, `users/${currentUser.uid}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          setTeacherName(data.name || "Teacher");
          setTeacherClass(data.classTeacher || "N/A");
          setTeacherSection(data.section || "N/A");
        }

        const studentsRef = ref(database, `students/${currentUser.uid}`);
        const studentsSnapshot = await get(studentsRef);
        if (studentsSnapshot.exists()) {
          setStudents(
            Object.entries(studentsSnapshot.val()).map(([id, data]) => ({
              id,
              ...data,
            }))
          );
        }
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const calculateGrade = (marks) => {
    if (marks >= 80) return "A+";
    if (marks >= 70) return "A";
    if (marks >= 60) return "B";
    if (marks >= 50) return "C";
    if (marks >= 33) return "D";
    return "F";
  };

  const handleAddOrEditStudent = async () => {
    const { name, fatherName, rollNumber, marks } = newStudent;
    if (!name || !fatherName || !rollNumber || marks === "") {
      alert("Please fill all fields.");
      return;
    }
    if (isNaN(marks) || marks < 0 || marks > 100) {
      alert("Invalid marks entered. Marks should be between 0 and 100.");
      return;
    }

    const status = marks >= 33 ? "pass" : "fail";
    const grade = calculateGrade(marks);
    const studentData = { ...newStudent, status, grade, class: teacherClass };

    if (editMode) {
      await update(
        ref(database, `students/${auth.currentUser.uid}/${currentStudentId}`),
        studentData
      );
      setStudents(
        students.map((student) =>
          student.id === currentStudentId ? { id: currentStudentId, ...studentData } : student
        )
      );
    } else {
      const studentRef = ref(database, `students/${auth.currentUser.uid}`);
      const newStudentRef = push(studentRef);
      await set(newStudentRef, studentData);
      setStudents([...students, { id: newStudentRef.key, ...studentData }]);
    }

    setShowModal(false);
    setEditMode(false);
    setNewStudent({ name: "", fatherName: "", rollNumber: "", marks: "" });
  };

  const handleEditStudent = (student) => {
    setNewStudent(student);
    setCurrentStudentId(student.id);
    setEditMode(true);
    setShowModal(true);
  };

  const handleDeleteStudent = async (id) => {
    await remove(ref(database, `students/${auth.currentUser.uid}/${id}`));
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <>
      <SchoolNavbar />
      <div className="container mt-4 bg-white">
        <div className="d-flex justify-content-between align-items-center my-3">
          <div>
            <h4 className="fw-bold">Class: {teacherClass} | Section: {teacherSection}</h4>
            <h5 className="fw-light">Teacher: {teacherName}</h5>
          </div>
          <div className="d-flex gap-2">
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Add Student
            </Button>
          </div>
        </div>

        <Table bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Father Name</th>
              <th>Roll Number</th>
              <th>Obtained Marks</th>
              <th>Status</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.fatherName}</td>
                <td>{student.rollNumber}</td>
                <td>{student.marks}</td>
                <td className={student.status === "pass" ? "text-success" : "text-danger"}>
                  {student.status}
                </td>
                <td>{student.grade}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle as={BiDotsVerticalRounded} className="text-muted cursor-pointer" />
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleEditStudent(student)}>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteStudent(student.id)}>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Student Form Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit Student" : "Add Student"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Father Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter father name"
                value={newStudent.fatherName}
                onChange={(e) => setNewStudent({ ...newStudent, fatherName: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter roll number"
                value={newStudent.rollNumber}
                onChange={(e) => setNewStudent({ ...newStudent, rollNumber: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Obtained Marks</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter obtained marks (0-100)"
                value={newStudent.marks}
                onChange={(e) => setNewStudent({ ...newStudent, marks: e.target.value })}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleAddOrEditStudent}>
              {editMode ? "Update" : "Add"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Teacher;
