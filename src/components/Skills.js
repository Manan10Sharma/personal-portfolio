import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
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
        <Container>
            <Row>
                <Col size={12}>
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