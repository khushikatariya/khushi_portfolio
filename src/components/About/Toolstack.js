import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiPhotoshop} from "react-icons/di"
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiFigma,
  SiSquarespace,
  SiCanva,
  SiGithub
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSquarespace />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

    </Row>
  );
}

export default Toolstack;