import { Container } from "react-bootstrap";
import TvGallery from "./Gallery";
import MovieType from "./MovieType";

const TvShows = () => {
  return (
    <Container fluid className="px-4">
      <MovieType type="Tv Shows" />
      <TvGallery title="Powerful" search="power" />
      <TvGallery title="Action" search="action" />
      <TvGallery title="Horror" search="horror" />
    </Container>
  );
};
export default TvShows;
