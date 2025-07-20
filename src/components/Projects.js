import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MailBot AI – Smart Email Replier",
      description: "Java Full Stack | Spring Boot | React.js | Chrome Extension -- Built an AI-powered Gmail assistant to auto-generate tone-based replies (Professional, Casual, Friendly)",
      imgUrl: projImg1,
    },
    {
      title: "Employee Management System",
      description: "Java Full Stack | Spring Boot | Thymeleaf | MySQL -- Designed a web-based CRUD app for managing employee records with robust backend and UI features",
      imgUrl: projImg2,
    },
    {
      title: "FoodFrenzy – Online Food Delivery Platform",
      description: "Java Full Stack | Spring Boot | Thymeleaf | MySQL | Spring Security -- Developed a full-stack food delivery platform with secure user/admin features",
      imgUrl: projImg3,
    },
    {
      title: "Sales Savvy – CRM & Sales Management Tool",
      description: "Java Full Stack | Spring Boot | React.js | MySQL -- Developed a scalable full-stack CRM application to manage leads, clients, products, and invoices. Built secure RESTful APIs with Spring Boot and JWT-based role authentication (Admin, Manager, Salesperson). Designed a responsive React.js UI with real-time sales analytics, PDF invoice generation, and advanced filtering. Integrated MySQL using Hibernate (JPA) for robust data persistence",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and Achievements</h2>
                <p>Developed a full-stack task management web application using Java, Spring Boot, React.js, and MySQL that allows users to create, organize, and track daily tasks and productivity goals.
                  Designed RESTful APIs with Spring Boot following MVC architecture and implemented JWT-based authentication with role-based access control.
                  On the frontend, built a responsive and interactive UI using React.js and Bootstrap, featuring real-time task updates, search/filter functionality, and modals for enhanced user experience.
                  Integrated MySQL with Spring Data JPA (Hibernate) for secure and efficient data handling.
                  The application supports features like user registration, task categorization, status filtering, and dynamic productivity reports, showcasing seamless integration of Java backend with modern frontend technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Key Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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


                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        <ul>
                          <p><strong><u>Python Development Essentials & Data Science:</u> </strong></p>
                          <p>MTF Institute of Management, Technology, and Finance - Gained foundational skills in applying Python for data analysis and insights.</p>  
                          <p><strong><u>The Complete MySQL Bootcamp:</u> </strong></p>
                          <p>Completed through Udemy - focusing on database MySQL.</p>
                          <p><strong><u>Git, GitLab, GitHub Fundamentals for Software Developers:</u> </strong></p>
                          <p>MTF Institute of Management, Technology and Finance - Learned version control basics, command line & GUI workflows, and Git essentials for developers.</p>
                          <p><strong><u>RSCIT- Rajasthan State Certificate in Information Technology:</u> </strong></p>
                          <p>Gained foundational knowledge in computer basics, internet usage, MS Office tools, and digital communication.</p>
                          <p><strong><u>HP Life - AI for Beginners:</u> </strong></p>
                          <p>Gained foundational knowledge of AI applications in business communication.</p>
                          <p><strong><u>HP Life - Business Email:</u> </strong></p>
                          <p>Learned effective email writing with focus on clarity, tone, and professionalism.</p>
                          <p><strong><u>IELTS - International English Language Testing System:</u> </strong></p>
                          <p>Certified by IDP (International Development Program).<li>Achieved an overall band score of 7.0 out of 9.0, demonstrating a good level of English proficiency in Listening, Reading, Writing, and Speaking.</li></p>
                        </ul>
                      </p>

                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        <ul>
                          <p><strong><u>Academic Topper Award</u></strong></p>
                          <p>Awarded for outstanding academic performance and securing the highest cumulative GPA among peers in the Computer Science department. Recognized for consistent excellence in core subjects such as Data Structures, Algorithms, Database Management, Software Engineering, and Programming Languages. Demonstrated strong analytical skills, dedication, and a deep understanding of theoretical and practical computer science concepts.</p>
                          <br></br>
                          <p><strong><u>Tech Excellence Award</u></strong></p>
                          <p>Awarded for active participation and contribution in the Intra-College IT Seminar organized by the Computer Science Department. Presented on emerging technologies and trends in the IT industry, demonstrating strong research, communication, and presentation skills. Showcased the ability to analyze complex technical topics and effectively engage with peers and faculty during knowledge-sharing sessions.</p>                          
                        </ul>
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}