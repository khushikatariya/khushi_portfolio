import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiPython, DiJava, DiReact, DiNodejs } from "react-icons/di";
import { SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiNextdotjs, SiTailwindcss, SiAirtable, SiDjango, SiHtml5, SiJson } from "react-icons/si";
import { SiAmazoncloudwatch, SiAmazonec2, SiAmazonaws, SiAmazondynamodb, SiAmazons3, SiAwslambda } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="skill-name">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div className="skill-name">TypeScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="skill-name">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div className="skill-name">Java</div>
      </Col>

      {/* AWS Services */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
        <div className="skill-name">AWS S3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb />
        <div className="skill-name">AWS DynamoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 />
        <div className="skill-name">AWS EC2</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazoncloudwatch />
        <div className="skill-name">AWS CloudWatch</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
        <div className="skill-name">AWS Lambda</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <div className="skill-name">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="skill-name">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div className="skill-name">PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div className="skill-name">NextJS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <div className="skill-name">Django</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <div className="skill-name">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="skill-name">ReactJS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="skill-name">NodeJS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAirtable />
        <div className="skill-name">Airtable</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <div className="skill-name">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJson />
        <div className="skill-name">JSON</div>
      </Col>
    </Row>
  );
}

export default Techstack;
