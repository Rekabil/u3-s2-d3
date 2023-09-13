import { Container, Row, Col, Dropdown, Form, Button } from "react-bootstrap";
import avatar from "../assets/avatar.png";
const Profile = () => {
  return (
    <Container className="settigs text-start mx-5">
      <h1 className="display-2 fw-bold m-0 text-white">Edit Profile</h1>
      <hr className="m-0 mb-4" />
      <Row className="gap-2 text-secondary">
        <Col xs={4} className="avatar">
          <img src={avatar} alt="avatar" className="w-100" />
        </Col>
        <Col>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Bilgen Kaan Remzi" />
            </Form.Group>
          </Form>
          <p className="mt-4 fs-1 fw-bold">Language:</p>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              English
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#spanish">Spanish</Dropdown.Item>
              <Dropdown.Item href="#greek">Greek</Dropdown.Item>
              <Dropdown.Item href="#italian">Italian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <hr className="m-0 my-4" />
          <p className="fs-1 fw-bold">ALL MATURITY SETTINGS</p>
          <Button variant="dark" className="w-75 fw-bold">
            ALL MATURITY RAGINGS
          </Button>
          <h6 className="mt-2 active text-white">Show titles of all maturity ratings for this profile.</h6>
          <Button variant="outline-secondary" className="w-25 my-4">
            EDIT
          </Button>
          <hr className="m-0 my-4" />
          <p className="fs-1 fw-bold">Autoplay controls</p>
          <Form>
            <Form.Group>
              <Form.Control type="checkbox" />
              <Form.Label>Autoplay preview while browsing on all diveces</Form.Label>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <hr className="m-0 my-4" />
      <Row className="finalbtns">
        <Col>
          <Button className="rounded-0" variant="light">
            Save
          </Button>
        </Col>
        <Col>
          <Button className="rounded-0" variant="outline-secondary">
            Cancel
          </Button>
        </Col>
        <Col xs={5}>
          <Button className="rounded-0" variant="outline-secondary">
            Delete Profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
