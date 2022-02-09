import React, { useEffect, useState } from "react";
import Student from "../Student/Student";

const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("./students.JSON")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div>
      <h2>Meet the learners worldwide</h2>
      {students.map((student) => (
        <Student key={student.id} student={student}></Student>
      ))}
    </div>
  );
};

export default Students;
