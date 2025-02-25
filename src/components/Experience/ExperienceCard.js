import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs"; // Changed GitHub to LinkedIn icon

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="experience-card-img"  />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.company}</Card.Subtitle>
        <Card.Text>{props.duration}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* LinkedIn button */}
        <Button variant="primary" href={props.linkedinLink} target="_blank">
          <BsLinkedin /> &nbsp; LinkedIn
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;{"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
