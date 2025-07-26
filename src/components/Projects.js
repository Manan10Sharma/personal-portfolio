import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "MailBot AI – Smart Email Replier",
      description: "Built a Chrome Extension that intelligently generates context-aware email replies...",
      imgUrl: projImg1,
      projectUrl: "https://github.com/Manan10Sharma/MailBot_AI-Smart_Email_Replies" // New property
    },
    {
      title: "Employee Management System",
      description: "Developed a dynamic web application featuring full CRUD functionality...",
      imgUrl: projImg2,
      projectUrl: "https://github.com/Manan10Sharma/Employee-Management-" // New property
    },
    {
      title: "CravZ – Online Food Delivery Platform",
      description: "Designed and implemented core modules including user authentication...",
      imgUrl: projImg3,
      projectUrl: "https://github.com/Manan10Sharma/CravZ" // New property
    },
    {
      title: "Portfolio Website Development",
      description: "Built a responsive personal portfolio website using React.js and Bootstrap...",
      imgUrl: projImg6,
      projectUrl: "https://github.com/Manan10Sharma/personal-portfolio" // New property
    },
    {
      title: "MealMate - Advance version of food delivery website",
      description: "A full-stack food Ordering platform that allows customers to browse restaurants...",
      imgUrl: projImg3,
      projectUrl: "https://github.com/Manan10Sharma/MealMate" // New property
    },
    {
      title: "Multithreaded Web server",
      description: "Currently working...",
      imgUrl: projImg5,
      projectUrl: "#" // New property
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col size={12} md={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h2>My Projects</h2>
                  <p className="description-text text-center">
                    Explore my hands-on projects, where I've applied robust technical skills to build practical and engaging applications.
                  </p>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}