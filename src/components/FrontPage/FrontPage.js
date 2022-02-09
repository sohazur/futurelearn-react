import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FrontPage.css";

const FrontPage = () => {
  return (
    <div>
      <Row>
        <Col className="my-lg-5 my-md-4" sm={12} md={7} lg={8}>
          <h1>This is Future Learning</h1>
          <p>
            Unlock knowledge and skills with online courses from the world’s
            leading universities and brands.
          </p>
        </Col>
        <Col sm={12} md={5} lg={4}>
          <img
            className="w-100"
            src="https://assets.futurelearn.com/packs/app/assets/images/billboards/billboard-homepage-1200-de22f861e8b1c520f62646eaa70dbe57.jpg"
            alt=""
          />
        </Col>
      </Row>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrontPage;
