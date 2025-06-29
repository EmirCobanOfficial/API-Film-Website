import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/loading";
import ErrorMessage from "../components/ErrorMessage";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "b06c4279d23840a7ced8ecb94f0faff4";
const language = "en-US";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${id}?api_key=${api_key}&language=${language}&append_to_response=credits`
        );

        if (!response.ok) {
          throw new Error("Hata Oluştu (Error)");
        }

        const data = await response.json();
        setMovie(data);

        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    getMovie();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="my-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="title h5 mb-0">Movie Details</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + movie?.poster_path
                }
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-9">
              <h3>{movie?.title}</h3>
              <p>{movie?.overview}</p>
              <p>Release Date: {movie?.release_date}</p>
              <p>Rating: {movie?.vote_average}</p>
              {/* Details Section */}

              <div>
                <h4>Details:</h4>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>
                  Production Companies:{" "}
                  {movie.production_companies
                    ?.map((pc) => pc.name)
                    .join(", ") || "N/A"}
                </p>
                <p>
                  Screenwriter:{" "}
                  {movie.credits?.crew?.find(
                    (p) => p.job === "Screenplay" || p.job === "Writer"
                  )?.name || "N/A"}
                </p>

                {/* --- NEW & IMPROVED GENRES SECTION --- */}
                {movie.genres?.length > 0 && (
                  <div className="mt-4">
                    <h5>Genres</h5>
                    <div className="d-flex flex-wrap">
                      {movie.genres.map((genre) => (
                        <a
                          href="#"
                          key={genre.id}
                          className="badge bg-info me-2 mb-2 text-decoration-none"
                          onClick={(e) => e.preventDefault()} // Prevents page from jumping
                        >
                          {genre.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {/* --- END OF NEW SECTION --- */}
              </div>

              {/* Actors section remains the same */}
              <p className="mt-4">Actors</p>
              <div className="row">
                {movie?.credits?.cast?.slice(0, 12).map((actor) => (
                  <div className="col-md-2" key={actor.id}>
                    <div className="card mb-2">
                      <img
                        src={
                          actor.profile_path
                            ? "https://image.tmdb.org/t/p/w500/" +
                              actor.profile_path
                            : "https://placehold.co/150x225?text=No+Image"
                        }
                        alt={actor.name}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{actor.name}</h5>
                        <p className="card-text">
                          {actor.character || "No character info"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
