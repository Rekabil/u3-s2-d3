import { Dropdown } from "react-bootstrap";

const MovieType = (props) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4">{props.type}</h2>
        <Dropdown className="ms-4 mt-1">
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#comedy">Comedy</Dropdown.Item>
            <Dropdown.Item href="#action">Action</Dropdown.Item>
            <Dropdown.Item href="#horror">Horror</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <i className="bi bi-border-all icons"></i>
        <i className="bi bi-grid-3x3-gap-fill icons"></i>
      </div>
    </div>
  );
};
export default MovieType;
