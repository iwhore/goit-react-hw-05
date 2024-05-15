import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieIdReviews } from "../../movies-api";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieInfoReviews() {
      try {
        setIsLoading(true);
        const data = await getMovieIdReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieInfoReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {reviews && (
        <ul>
          {reviews.results.map((item) => {
            return (
              <li key={item.id}>
                <p>Author: {item.author}</p>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}