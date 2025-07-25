import { Container, Row, Col } from "react-bootstrap";
// Removed contactImg import as we are removing the image from this section for a cleaner look
// import contactImg from "../assets/img/contact-img.svg";
import 'animate.css'; // Assuming you use animate.css for animations
import TrackVisibility from 'react-on-screen'; // Assuming you use TrackVisibility

export const Contact = () => {
  // Define your contact information here
  const myContactInfo = {
    email: "manansharma597@gmail.com", // <--- REPLACE WITH YOUR EMAIL
    github: "https://github.com/Manan10Sharma", // <--- REPLACE WITH YOUR GITHUB PROFILE URL
    linkedin: "https://www.linkedin.com/in/manan-sharma-7a827220a/", // <--- REPLACE WITH YOUR LINKEDIN PROFILE URL
    phone: "+91-72319-77000", // <--- REPLACE WITH YOUR PHONE NUMBER
    Resume: "https://drive.google.com/file/d/1xWR542NBpx7_BVDdo5i-zz7PYbfeWw8K/view"
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center justify-content-center"> {/* Added justify-content-center */}
          <Col size={12} md={10} lg={8} className="text-center"> {/* Centered content */}
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <h2>Let's Connect</h2> {/* Changed heading to "Let's Connect" */}
                  
                  

                  {/* Displaying contact links */}
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
                      <strong>Resume:</strong> <a href={`tel:${myContactInfo.phone}`}>{myContactInfo.Resume}</a>
                    </p>
                  </div>
                  <br></br><br></br><br></br><br></br>
                  {/* The new custom message */}
                  <p className="custom-message">
                    ◡̈ Thank you for stepping into my world of ideas and code. Every click, every scroll, and every second spent here means a lot! Let’s create something amazing together.
                  </p>

                </div>}
            </TrackVisibility>
          </Col>
          {/* Removed the image column entirely */}
          {/* <Col md={6}>
            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};