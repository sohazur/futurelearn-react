import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky-top">
      <Nav justify variant="tabs">
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/home"
            className="text-dark fs-4 fw-bold py-4"
            eventKey="/home"
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-dark fs-4 fw-bold py-4"
            as={Link}
            to="/courses"
            eventKey="/courses"
          >
            Courses
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-dark fs-4 fw-bold py-4"
            as={Link}
            to="/students"
            eventKey="/students"
          >
            Students
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-dark fs-4 fw-bold py-4"
            as={Link}
            to="/about-us"
            eventKey="/about-us"
          >
            About Us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
