import { useEffect, useState } from "react";
import { getMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Loading />}
      {error && <Error />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}