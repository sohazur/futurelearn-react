import React from "react";
import { Button, Card } from "react-bootstrap";

const Course = (props) => {
  const { courseName, courseFee, duration, img, description, rating } =
    props.courses;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{courseName}</Card.Title>
        <h5>Review: {rating}/5</h5>
        <Card.Text>
          {description}
          <div>
            <p>Fee: ${courseFee}</p>
            <p>{duration}</p>
          </div>
        </Card.Text>
        <Button variant="primary">Find out more</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
