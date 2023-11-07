import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import pdpu from "../../Assets/Projects/pdpu.png";
import suicide from "../../Assets/Projects/suicide.png";
import solar from "../../Assets/Projects/solar.png";
import ops from "../../Assets/Projects/OS.png"
import krisent from "../../Assets/Projects/Krishna.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ops}
              isBlog={false}
              title="GUI for Operating Systems Algorithm"
              description="Project combines Disk Scheduling and Page Replacement Algorithms into one platform using JAVA. A GUI is created in Eclipse IDE that demonstrates these algorithms and includes tools for comparison and analysis."
              ghLink="https://github.com/khushikatariya/OperatingSystem14"
              demoLink="https://youtu.be/Mh5osj7z99c?si=v4rCj5IrLaHVDw8U"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krisent}
              isBlog={false}
              title="Krishna Enterprise"
              description="Company website of Krishna Enterprise using HTML, CSS, Bootstrap and Javascript. Utilised several methods to increase the visibility and user engagement of the customers"
              ghLink="https://github.com/khushikatariya/Krishna-Enterprise"
              demoLink="https://krishna-enterprise.vercel.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdpu}
              isBlog={false}
              title="Digital Repository Management System"
              description="Designed and deployed an open-source E-library web app for university using PHP, HTML/CSS,Bootstrap and MySQL, streamlining upload and access to diverse academic resources, including E-Books, research papers, videos, and theses Revolutionized university's E-library experience, ensuring a user-friendly,responsive and efficient platform for students and faculty "
              ghLink="https://github.com/khushikatariya/Minor-Project"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Solar Panel Fault Detection"
              description="Used the solar panel EL images dataset and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning classifying it into good solar panels and faulty solar panels. I was able to achieve an accuracy of 98% by using Resnet34 and VGG19 pretrained model."
              ghLink="https://colab.research.google.com/drive/1Y7rdLZnKom2oU47047nQYZsq_HSpZ1Gq?usp=sharing"
              
            />
          </Col>

          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/khushikatariya/Face_And_Emotion_Detection-master"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;