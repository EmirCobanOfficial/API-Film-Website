import React, { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/loading";
import MovieList from "../components/MovieList";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "b06c4279d23840a7ced8ecb94f0faff4";
const page = 1;
const language = "en-US";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/popular?api_key=${api_key}&page=${page}&language=${language}&query=`
        );

        if (!response.ok) {
          throw new Error("Hata Oluştu (Error)");
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    getMovies();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return <MovieList movies={movies} title={"Popular Movies"} />;
}
export default Movies;
