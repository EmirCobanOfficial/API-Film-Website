import React, { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Movie from "../components/Movie";
import Loading from "../components/loading";

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

  return (
    <div className="my-3">
      <div className="card">
        <div className="card-header">
          <h2 className="title h5 mb-0">Movie List</h2>
        </div>
        <div className="card-body">
          {movies.length == 0 ? (
            <div>Film bulunamadı</div>
          ) : (
            <div
              id="movie-list"
              className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-2"
            >
              {movies.map((m, index) => (
                <Movie key={index} movieObj={m} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Movies;
