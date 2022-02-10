import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Course from "../Course/Course";

const FrontPageCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      {/* Loading only six courses */}
      {courses
        .filter((course) => course.id <= 6)
        .map((course) => (
          <Col key={course.id} className="g-5 m-auto" sm={12} md={6} lg={4}>
            <Course courses={course}></Course>
          </Col>
        ))}
    </>
  );
};

export default FrontPageCourses;
