import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <Container>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} className="g-5" sm={12} md={6} lg={4}>
            <Course courses={course}></Course>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
