import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="my-5 about-height d-flex flex-column align-items-center">
      <div>
        <h1 className="text-left">This is Future Learning</h1>
        <p className="text-left">
          Unlock knowledge and skills with online courses from the world’s
          leading universities and brands.
        </p>
      </div>
      <br />
      <br />
      <h3 className="mb-4">Why FutureLearn?</h3>
      <Container>
        <Row>
          <Col sm={8} lg={4} md={8} className="p-4 m-sm-auto border">
            <h5>Learn anything</h5>
            <p>
              Whether you want to develop as a professional or discover a new
              hobby. You can even take your learning further with online
              microcredentials.
            </p>
          </Col>
          <Col sm={8} lg={4} md={8} className="p-4 m-sm-auto border">
            <h5>Learn together</h5>
            <p>
              Join millions of people from around the world learning together.
              Online learning is as easy and natural as chatting with a group of
              friends.
            </p>
          </Col>
          <Col
            sm={8}
            lg={4}
            md={8}
            className="p-4
            m-sm-auto
            border"
          >
            <h5>Learn with experts</h5>
            <p>
              Meet educators from top universities and cultural institutions,
              who'll share their experience through videos, articles, quizzes
              and discussions.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
