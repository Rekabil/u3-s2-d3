import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <Col sm={6} lg={4} xl={2} className="mb-2 px-1" key={props.id}>
      <Link to={"/movie-details/" + props.id}>
        <img className="img-fluid" src={props.src} alt="movie" />
      </Link>
    </Col>
  );
};
export default Movie;
