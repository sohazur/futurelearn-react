import React from "react";
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link className="py-4" to="/home" eventKey="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="py-4" to="/courses" eventKey="/courses">
            Courses
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="py-4" to="/students" eventKey="/students">
            Students
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="py-4" to="/about-us" eventKey="/about-us">
            About Us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
