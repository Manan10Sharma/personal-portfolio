import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm"; // Keep this line commented out unless you actually integrate Mailchimp
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon4 from "../assets/img/nav-icon4.svg"; // GitHub
import navIcon3 from "../assets/img/nav-icon3.svg"; // Placeholder for Resume, using a generic icon

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center mt-5"> {/* Added margin-top for spacing */}
          <Col size={12} sm={4} className="text-center text-sm-start">
            <img src={logo} alt="Logo" className="footer-logo" /> {/* Added class */}
          </Col>
          <Col size={12} sm={4} className="text-center mt-3 mt-sm-0"> {/* Center text on mobile, no margin top on sm+ */}
            <p>“Building the backend of today, with the vision of tomorrow.”</p>
            <p className="small-text">All Rights Reserved. © {new Date().getFullYear()} Manan Sharma.</p> {/* Dynamic year */}
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end mt-3 mt-sm-0">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/manan-sharma-7a827220a/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/Manan10Sharma" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="GitHub" /></a>
              <a href="https://drive.google.com/file/d/1xWR542NBpx7_BVDdo5i-zz7PYbfeWw8K/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Resume" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}