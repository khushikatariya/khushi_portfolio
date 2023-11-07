import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khushi Katariya </span>
            from <span className="purple"> Los Angeles, USA</span>
            <br /> I am a Master's in Computer Science student studying st University of Southern California
            <br />
            I completed my undergraduate in India, at Pandit Deendayal Energy University in Bachlors of Technology - Computer Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading about Finance and Fintech world
            </li>
            <li className="about-activity">
              <ImPointRight /> Journaling
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you can dream it, you can do it."{" "}
          </p>
          <footer className="blockquote-footer">Walt Disney</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;