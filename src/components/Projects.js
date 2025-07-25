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
      description: "Built a Chrome Extension that intelligently generates context-aware email replies within Gmail. Designed and developed RESTful APIs using Spring Boot and implemented a tone-based classification system (Professional, Casual, Friendly) for tailored responses. Integrated a responsive frontend using React.js and Material UI, enabling real-time suggestions directly within the Gmail interface.",
      imgUrl: projImg1,
    },
    {
      title: "Employee Management System",
      description: "Developed a dynamic web application featuring full CRUD functionality with role-based access control and form validation. Implemented backend logic using Spring MVC and Hibernate, and used Thymeleaf for server-side rendering. Included an intuitive admin panel for managing users and data efficiently.",
      imgUrl: projImg2,
    },
    {
      title: "CravZ – Online Food Delivery Platform",
      description: "Designed and implemented core modules including user authentication, order processing, and admin management. Integrated Spring Security for robust access control and used Thymeleaf to build a responsive, server-rendered UI connected to a MySQL-backed backend.",
      imgUrl: projImg3,
    },
    {
      title: "Portfolio Website Development",
      description: "Built a responsive personal portfolio website using React.js and Bootstrap. Showcases skills, projects, and contact information with smooth animations.",
      imgUrl: projImg6,
    },
    {
      title: "MealMate - Advance version of food delivery website",
      description: "A full-stack food Ordering platform that allows customers to browse restaurants, place orders, and make payments while allowing vendors to manage their restaurant details, orders, and menus. The platform includes secure user authentication and role-based access control to ensure only authorized users can access specific resources.",
      imgUrl: projImg3,
    },
    {
      title: "Multithreaded Web server",
      description: "Currently working...",
      imgUrl: projImg5,
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