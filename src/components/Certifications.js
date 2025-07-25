import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certifications = () => {
  const certificates = [
    {
      value: "Git, GitLab & GitHub Fundamentals",
      name: "MTF Institute of Management Technology and Finance: Practical knowledge of Git workflows, version control, and collaborative development.",
      link: "https://drive.google.com/file/d/1jiodCujSXnN4wDNcn7finIuu0MUXORz5/view?usp=drive_link"
    },
    {
      value: "Complete MySQL Bootcamp",
      name: "Udemy: Covered data modeling, query optimization, and indexing techniques.",
      link: "https://drive.com/file/d/1KiO_oqK_0OAgltlO9RUjgBLemDLsrYqx/view?usp=drive_link"
    },
    {
      value: "Machine Learning & AI Beginners Course",
      name: "Udemy: Gained foundational knowledge of machine learning and artificial intelligence concepts.",
      link: "https://drive.google.com/file/d/1-zruaBRzbk7xIUUtR_7stY6NO-n7fNKF/view?usp=drive_link"
    },
    {
      value: "Python Development Essentials & Data Science",
      name: "MTF Institute of Management Technology and Finance: Applied Python in data analysis, ML basics, and scripting.",
      link: "https://drive.google.com/file/d/184ZAWqCPXPnIBGJMlBNcXlO9d_TWaNTv/view?usp=drive_link"
    },
    {
      value: "Oracle Java SE 21 Developer Professional (1Z0-830)",
      name: "Udemy: Covering advanced Java concepts including OOP, lambdas, streams, modules, and multithreading—aligned with the Oracle certification.",
      link: "https://drive.google.com/file/d/1EtLv2LhduZaCbCAWYCqIjvt5RVjpaaY9/view?usp=drive_link"
    },
    {
      value: "IELTS",
      name: "IDP: Band Score 7.0/9.0 – Proficient in Listening, Reading, Writing, and Speaking.",
      link: "https://drive.google.com/file/d/1RYAZ76tmgdKCYgWxEN8tQVwRx-E76PXO/view?usp=drive_link"
    },
  ];

  return (
    <section className="project" id="certifications">
      <Container>
        <Row className="justify-content-center">
          <Col size={12} md={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h2 className="section-heading">My Certifications</h2>
                  <p className="description-text text-center">
                    A collection of my professional certifications, validating expertise in various technologies and domains.
                  </p>
                  <Row className="skill-list-container">
                    {
                      certificates.map((certificate, index) => {
                        return (
                          <div className="skill-item" key={index}>
                            <a href={certificate.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                {/* Changed class name for specific styling of the certificate title */}
                                <div className="certificate-title">{certificate.value}</div>
                            </a>
                            <h5>{certificate.name}</h5>
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
      {/* <img className="background-image-right" src={colorSharp2} alt="Background" /> */}
    </section>
  )
}