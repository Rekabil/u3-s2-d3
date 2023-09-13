import { Alert, Container, Row, Spinner } from "react-bootstrap";
import { Component } from "react";
import Movie from "./Movie";

class Gallery extends Component {
  state = {
    isLoading: true,
    data: [],
    errMsg: false,
  };

  fetchMovies = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=47f09e4d&s=" + this.props.search);

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        this.setState({ data: data.Search });
      } else {
        console.log("error while fetching");
        this.setState({ errMsg: true });
      }
    } catch (error) {
      this.setState({ errMsg: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    return (
      <Container className="my-3">
        {this.state.isLoading && (
          <div className="ml-2">
            <Spinner animation="grow" />
          </div>
        )}
        {this.state.errMsg && <Alert variant="warning">There is an error</Alert>}
        <h2 className="text-start">{this.props.title}</h2>
        <Row className="flex-nowrap" style={{ overflow: "auto" }}>
          {this.state.data.map((movie) => {
            return <Movie src={movie.Poster} key={movie.imdbID} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
