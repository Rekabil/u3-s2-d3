import { Button, Col, Row, Container } from "react-bootstrap";

const MyFooter = () => (
  <footer>
    <Container fluid>
      <Row className="text-center mt-5">
        <Col xs={6} className="offset-3">
          <Row>
            <Col xs={12} className="text-left mb-2 d-flex">
              <i className="bi bi-facebook footer-icon"></i>
              <i className="bi bi-instagram footer-icon"></i>
              <i className="bi bi-twitter footer-icon"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>
          <Row xs={1} sm={2} md={4} lg={4}>
            <Col>
              <Row>
                <Col xs={12} className="footer-links">
                  <p>
                    <a href="#a" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#m" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#p" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#c" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col xs={12} className="footer-links">
                  <p>
                    <a href="#a" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#l" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col xs={12} className="footer-links">
                  <p>
                    <a href="#h" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#j" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#c" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col xs={12} className="footer-links">
                  <p>
                    <a href="#g" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#t" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#c" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-start mb-2">
              <Button variant="" className="footer-button rounded-0 mt-3">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-start my-2 copyright">
              © 1997-2022 Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default MyFooter;
