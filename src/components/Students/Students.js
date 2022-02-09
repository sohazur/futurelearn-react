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
      {students.map((student) => (
        <Student key={student.id}></Student>
      ))}
    </div>
  );
};

export default Students;
