import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Achievements = () => {
  const achievements = [
    {
      value: "Academic Topper Award",
      name: "Awarded for outstanding academic performance and securing the highest cumulative GPA among peers in the Computer Science department. Recognized for consistent excellence in core subjects such as Data Structures, Algorithms, Database Management, Software Engineering, and Programming Languages. Demonstrated strong analytical skills, dedication, and a deep understanding of theoretical and practical computer science concepts.",
    },
    {
      value: "Tech Excellence Award",
      name: "Awarded for active participation and contribution in the Intra-College IT Seminar organized by the Computer Science Department. Presented on emerging technologies and trends in the IT industry, demonstrating strong research, communication, and presentation skills. Showcased the ability to analyze complex technical topics and effectively engage with peers and faculty during knowledge-sharing sessions.",
    },
  ];

  return (
    <section className="project" id="achievements"> {/* Reusing 'project' class for general styling, and unique ID */}
      <Container>
        <Row className="justify-content-center">
          <Col size={12} md={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h2 className="section-heading">Key Achievements</h2>
                  <p className="description-text text-center">
                    Highlighting my significant contributions and accomplishments throughout my career journey.
                  </p>
                  <Row className="skill-list-container"> {/* Reusing skill-list-container for responsive grid */}
                    {
                      achievements.map((achievement, index) => {
                        return (
                          <div className="skill-item" key={index}>
                            <div className="skill-percentage">{achievement.value}</div>
                            <h5>{achievement.name}</h5>
                          </div>
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* Optional: Add a background image specific to this section if desired */}
      {/* <img className="background-image-left" src={colorSharp} alt="Background" /> */}
    </section>
  )
}