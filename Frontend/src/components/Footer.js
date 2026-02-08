import { Col, Container, Row } from "react-bootstrap";
import navIcon3 from "../assets/img/github-mark-white.svg";
import navIcon4 from "../assets/img/gmail.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={12} className="text-center">
            {/* <img src={logo} alt="Logo" /> */}
            {/* <p>
              Ruhul barbhuiya <br />
              Contact : 9101641886
            </p> */}
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ruhul-amin-barbhuiya-790834167/"
                target="_blank"
                rel="no noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="mailto:ruhulbarbhuiya228@gmail.com">
                <img src={navIcon4} alt="" />
              </a>
              <a
                href="https://www.facebook.com/ruhul.barbhuiya2/"
                target="_blank"
                rel="no noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://github.com/ruhul321"
                target="_blank"
                rel="no noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
