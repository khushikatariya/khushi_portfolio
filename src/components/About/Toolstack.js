import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPhotoshop, DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiFigma,
  SiSquarespace,
  SiCanva,
  SiGithub,
  SiIntellijidea,
  SiJupyter,
  SiTableau,
  SiMicrosoftoffice,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <div className="skill-name">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="skill-name">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <div className="skill-name">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="skill-name">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <div className="skill-name">Slack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="skill-name">Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <div className="skill-name">Canva</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
        <div className="skill-name">Photoshop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSquarespace />
        <div className="skill-name">Squarespace</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div className="skill-name">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <div className="skill-name">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="skill-name">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <div className="skill-name">Tableau</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
        <div className="skill-name">Microsoft Office</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="skill-name">Git</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
