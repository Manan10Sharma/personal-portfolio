import { Container, Row, Col } from "react-bootstrap";
// Removed Carousel, meter images, and navigation arrows imports
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  // Defining the skills with their names and percentages explicitly
  // Percentages are based on the image you provided and common associations.
  const skillsList = [
    { name: "Java, Python, SQL, JavaScript"},
    { name: "HTML, CSS, JSON"},
    { name: "Spring Boot, Spring MVC"},
    { name: "Hibernate, Servlets, JDBC"},
    { name: "MySQL, PostgreSQL, MongoDB"},
    { name: "Git (GitHub, GitLab), Jenkins, Docker"},
    { name: "Postman, Jira"},
    { name: "JUnit, Selenium (Manual & Automation Testing)"},
    { name: "Agile/Scrum Methodology"},
    { name: "SDLC Processes"}
  ];

  return (
    <section className="skill" id="skills">
        <Container> {/* Using Container from react-bootstrap for consistent layout */}
            <Row>
                <Col size={12}> {/* Using Col from react-bootstrap for responsive columns */}
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am a passionate software developer with a strong foundation in both backend and frontend development. I specialize in building scalable applications, designing intuitive user interfaces, and ensuring seamless integration between client and server. With a focus on writing clean, maintainable code, I follow industry best practices, Agile methodologies, and SDLC principles to deliver high-quality, performance-driven solutions. I’m driven by continuous learning and a commitment to creating meaningful digital experiences.</p>
                        <div className="skill-list-container">
                          {skillsList.map((skill, index) => (
                            <div className="skill-item" key={index}>                              
                              <h5>{skill.name}</h5>
                            </div>
                          ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}