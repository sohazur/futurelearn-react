import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <div>
      {courses.map((course) => (
        <Course key={courses.id} courses={courses}></Course>
      ))}
    </div>
  );
};

export default Courses;
