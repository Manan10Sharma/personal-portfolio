import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const myContactInfo = {
    email: "manansharma597@gmail.com",
    github: "https://github.com/Manan10Sharma",
    linkedin: "https://www.linkedin.com/in/manan-sharma-7a827220a/",
    phone: "+91-72319-77000",
    Resume: "https://drive.google.com/file/d/1xWR542NBpx7_BVDdo5i-zz7PYbfeWw8K/view" // Fixed link
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={10} lg={8} className="text-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <h2>Let's Connect</h2>

                  <div className="contact-details">
                    <p>
                      <strong>Email:</strong> <a href={`mailto:${myContactInfo.email}`}>{myContactInfo.email}</a>
                    </p>
                    <p>
                      <strong>GitHub:</strong> <a href={myContactInfo.github} target="_blank" rel="noopener noreferrer">{myContactInfo.github}</a>
                    </p>
                    <p>
                      <strong>LinkedIn:</strong> <a href={myContactInfo.linkedin} target="_blank" rel="noopener noreferrer">{myContactInfo.linkedin}</a>
                    </p>
                    <p>
                      <strong>Phone:</strong> <a href={`tel:${myContactInfo.phone}`}>{myContactInfo.phone}</a>
                    </p>
                    <p>
                      <strong>Resume:</strong> <a href={myContactInfo.Resume} target="_blank" rel="noopener noreferrer">View Resume</a> {/* Changed text to "View Resume" */}
                    </p>
                  </div>
                  <br></br><br></br><br></br><br></br>
                  <p className="custom-message">
                    ◡̈ Thank you for stepping into my world of ideas and code. Every click, every scroll, and every second spent here means a lot! Let’s create something amazing together.
                  </p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};