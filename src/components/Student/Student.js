import React from "react";
import { Col, Row } from "react-bootstrap";
import "./student.css";

const Student = (props) => {
  const { name, country, quote, img } = props.student;
  return (
    <Row className="mx-lg-5 g-0">
      <Col sm={6} md={5} lg={3}>
        <img src={img} alt={name} />
      </Col>
      <Col sm={6} md={7} lg={9} className="text-white bg-student">
        <h4>"{quote}"</h4>
        <br></br>
        <p>
          <small>
            {name}, {country}
          </small>
        </p>
      </Col>
    </Row>
  );
};

export default Student;
