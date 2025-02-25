import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import amazon from "../../Assets/amazon.png";
import greatpods from "../../Assets/greatpods.png";
import cling from "../../Assets/cling.png";
import opshub from "../../Assets/opshub.png"; // Add the logo path

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My <strong className="purple">Work Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the roles I've worked in.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={greatpods}
              title={<span className="company-name">GreatPods</span>}
              position={<span className="position">Software Developer Intern</span>}
              duration="October 2024 - Present"
              description="Automated podcast data ingestion via Podcast Index API, reducing manual work by 95%. Implemented role-based authentication for secure access. Revamped podcast image caching, cutting load times by 40%."
            />
          </Col>
          
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={amazon}
              title={<span className="company-name">Amazon</span>}
              position={<span className="position">Software Development Engineer Intern</span>}
              duration="May 2024 - August 2024"
              description="Engineered an end-to-end audit system processing over 1M tax-related data entries. Optimized NoSQL schema in DynamoDB, reducing back-end data access time by 75%. Built scalable data storage handling a 200% increase in records."
            />
          </Col>



          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={cling}
              title={<span className="company-name">Cling Multi Solutions</span>}
              position={<span className="position">Software Developer Intern</span>}
              duration="January 2023 - June 2023"
              description="Developed a feature-rich portal with an integrated mailing system, reducing invoice processing time by 60%. Designed a responsive admin/employee portal, increasing mobile engagement by 40%."
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={opshub}
              title={<span className="company-name">OpsHub Technologies Pvt. Ltd.</span>}
              position={<span className="position">Associate Technical Consultant</span>}
              duration="May 2022 - Jul 2022"
              description="Demonstrated technical prowess and interpersonal finesse as a technological consultant, delivering captivating pre-sales product demos, addressing client needs, and establishing trust through comprehensive Q&A sessions. Utilized ALM tools (JIRA, Rally, Github Lab, Rational Doors, DoorsNG) for product demo configurations. Developed a Java utility employing REST APIs, reducing manual data entry for integration details by 80%, showcasing a strong commitment to automation and process improvement."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
