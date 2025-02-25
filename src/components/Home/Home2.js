import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myAv from "../../Assets/khushi_avatar.png"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
<Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey in technology began with a deep curiosity for building impactful solutions, and I’ve been passionately coding ever since.
              <br />
              <br/>
              <i>
              I am a <b className="purple">Master's in Computer Science</b> student at <b className="purple">University of Southern California</b>, 
              with experience in <b className="purple">Software Development, AI-driven applications, and Scalable Systems.</b>
              </i>
              <br/>
              <br />I am proficient in 
              <i>
                <b className="purple"> JavaScript, Python, and Java</b>, 
              </i>
              and have worked extensively with backend and full-stack technologies.
              <br />
              <br />
              I interned at <b className="purple">Amazon</b> as a **Software Development Engineer Intern**, 
              where I worked on <b className="purple">scalable backend solutions</b> for critical systems. 
              Currently, I am the sole engineer at <b className="purple">GreatPods</b>, a startup focused on aggregating 
              podcast critic reviews. Here, I am building an **MVP platform**, optimizing **SEO and cross-platform performance**, 
              and developing **AI-powered podcast recommendations**.  
              <br />
              <br />
              My interests lie in developing
              <i>
                <b className="purple"> Web Technologies, Distributed Systems, and AI-powered solutions.</b>
              </i>
              I enjoy solving complex engineering challenges and making technology more accessible.  
              <br />
              <br />
              I have hands-on experience with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> Modern JavaScript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>, while also leveraging cloud technologies like AWS to build scalable applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myAv} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/khushikatariya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/khushikatariya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__khuxshi__/?igshid=cjRhOW11ejlkb2Zp"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>

  );
}
export default Home2;