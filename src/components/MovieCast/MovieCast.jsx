import { useEffect, useState } from "react";
import { getMovieIdCredits } from "../../movies-api";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieInfoCredits() {
      try {
        setIsLoading(true);
        const data = await getMovieIdCredits(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieInfoCredits();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {cast && (
        <ul>
          {cast.cast.map((item) => {
            return (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  alt={`photo ${item.name}`}
                  width={100}
                />
                <p>{item.name}</p>
                <p>{item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}