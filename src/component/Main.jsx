import { Container } from "react-bootstrap";
import Gallery from "./Gallery";
import MovieType from "./MovieType";

const Main = () => {
  return (
    <Container fluid className="px-4">
      <MovieType type="Movie Francizes" />
      <Gallery title="Harry Potter Series" search="harry potter" />
      <Gallery title="AVENGERS" search="avengers" />
      <Gallery title="Scream" search="scream" />
    </Container>
  );
};

export default Main;
