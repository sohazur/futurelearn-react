import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Course.css";

const Course = (props) => {
  const { courseName, courseFee, duration, img, description, rating } =
    props.courses;
  return (
    <Card style={{ width: "18rem", height: "38rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{courseName}</Card.Title>
        <h5>Review: {rating}/5</h5>
        <Card.Text>{description}</Card.Text>
        <div>
          <p>Fee: ${courseFee}</p>
          <p>{duration}</p>
        </div>
        <Button variant="primary">Find out more</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
