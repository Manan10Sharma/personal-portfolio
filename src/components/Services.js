import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () => {
  const jobExperiences = [
    {
      company: "KodNest Ed-Tech Pvt. Ltd.",
      title: "Full Stack Development Intern/Trainee – Java & Python",
      duration: "Dec 2024 - Jul 2025",
      location: "Bengaluru, India",
      responsibilities: [
        "Completed comprehensive training in Java & Python Full Stack Development, including:",
        "- Core Java, Advanced Java, Spring Boot, SQL, Web Development, Testing.",
        "- Competitive Programming and software development best practices.",
        "Focus on developing full-stack applications and gaining readiness for real-world technology roles.",
      ],
    },
    {
      company: "MedTermRCM Pvt. Ltd.",
      title: "Java Developer & IT Executive",
      duration: "Sep 2022 - Oct 2024",
      location: "Raisinghnagar, India",
      responsibilities: [
        "Developed and maintained scalable web applications, resolving production issues and improving REST API performance by 40%. Collaborated with cross-functional teams on requirements, design, and implementation. Managed basic system administration with a focus on security, while adhering to SDLC standards and writing clean, maintainable code.",
      ],
    },
  ];

  return (
    <section className="services" id="experience">
      <Container>
        <Row className="justify-content-center">
          <Col size={12} md={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h2 className="text-center">My Work Experience</h2>
                  <p className="text-center description-text">
                    Here's a detailed overview of my professional journey, highlighting key roles, responsibilities, and achievements at various organizations.
                  </p>

                  <div className="experience-list">
                    {jobExperiences.map((job, index) => (
                      <div className="experience-item" key={index}>
                        <Row className="w-100 no-gutters"> {/* w-100 to make row fill parent, no-gutters for tight control */}
                          <Col xs={12} md={4} className="experience-info">
                            <h3>{job.company}</h3>
                            <h4>{job.title}</h4>
                            <p className="duration">{job.duration}</p>
                            <p className="location">{job.location}</p>
                          </Col>
                          <Col xs={12} md={8} className="experience-responsibilities">
                            <ul>
                              {job.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                              ))}
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};