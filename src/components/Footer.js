import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm"; // Removed
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm />  Removed */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/manan-sharma-7a827220a/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Manan10Sharma"><img src={navIcon4} alt="Icon" /></a>
              <a href="https://drive.google.com/file/d/1xWR542NBpx7_BVDdo5i-zz7PYbfeWw8K/view?usp=drive_link"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>“Building the backend of today, with the vision of tomorrow.” All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}