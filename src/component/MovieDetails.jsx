import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const param = new URLSearchParams(window.location.search).get("id");
  const fetchComments = async () => {
    setIsLoading(true);
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/books/" + param + "/comments/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5Y2NhMThkM2Q0OTAwMTRjZmQ3ZmEiLCJpYXQiOjE2OTQwOTI0NTAsImV4cCI6MTY5NTMwMjA1MH0.fgB8DJQ6GZCMZGZ7c_5mcKN-RG4yiVrx-xXRPLfBdG4",
        },
      });
      console.log(response);
      if (response.ok) {
        let commentList = await response.json();
        setComments(commentList);
        setIsError(false);
        setIsFirstLoad(false);
        setIsLoading(false);
      } else {
        console.log("error");
        setIsError(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  });

  return (
    <div className="text-center">
      <h2>CommentArea</h2>
      {isError && <Error />}
      <AddComment asin={param} />
      {isLoading && <Loading />}

      {!isLoading && !isFirstLoad && comments.length === 0 ? (
        <ListGroup>
          <ListGroup.Item>Non ci sono ancora commenti</ListGroup.Item>
        </ListGroup>
      ) : (
        <CommentList commentsToShow={comments} />
      )}
    </div>
  );
};
export default MovieDetails;
