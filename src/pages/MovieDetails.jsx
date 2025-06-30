import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/loading";
import ErrorMessage from "../components/ErrorMessage";
import SimilarMovies from "./SimilarMovies";

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
          throw new Error("Error");
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
    <>
      <div
        className="movie-details-bg text-white"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div
          className="bg-dark bg-opacity-85"
          style={{
            minHeight: "100vh",
            width: "100%",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <div className="container d-flex justify-content-center align-items-start py-5">
            <div className="row w-100">
              <div className="col-md-3 d-none d-lg-block">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid rounded shadow img-thumbnail"
                />
              </div>
              <div className="col-md-9">
                <h1 className="display-4">{movie.title}</h1>
                <p>
                  {movie.release_date} <i className="bi bi-dot text-white"></i>
                  <span className="text-white">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </span>
                  <i className="bi bi-dot text-white"></i>
                  {movie.runtime} Mins
                </p>
                <p>
                  <span className="badge bg-warning text-dark">
                    {Math.round(movie.vote_average * 10)}%
                  </span>
                </p>
                {movie.overview && (
                  <p className="lead">
                    <strong>Summary: </strong>
                    {movie.overview}
                  </p>
                )}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                  <p className="d-flex flex-column text-center mb-2 mb-md-0">
                    <span>Producer</span>
                    <span>
                      {movie.production_companies?.[0]?.name || "N/A"}
                    </span>
                  </p>
                  <p className="d-flex flex-column text-center mb-2 mb-md-0">
                    <span>Director</span>
                    <span>
                      {movie.credits?.crew?.find((c) => c.job === "Director")
                        ?.name || "N/A"}
                    </span>
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>Screenwriter</span>
                    <span>
                      {movie.credits?.crew?.find(
                        (c) => c.job === "Screenplay" || c.job === "Writer"
                      )?.name || "N/A"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Actor */}
          <div className="container pb-5">
            <h3 className="mt-5 mb-3 fw-bold text-white">Actors</h3>
            <div className="row g-4">
              {movie?.credits?.cast?.slice(0, 12).map((actor) => (
                <div
                  className="col-6 col-sm-4 col-md-3 col-lg-2"
                  key={actor.id}
                >
                  <div
                    className="card border-0 shadow-sm h-100 text-center actor-card"
                    style={{
                      background: "rgba(30, 30, 30, 0.95)",
                      borderRadius: "1rem",
                      transition: "transform 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <img
                      src={
                        actor.profile_path
                          ? "https://image.tmdb.org/t/p/w500/" +
                            actor.profile_path
                          : "https://placehold.co/150x225?text=No+Image"
                      }
                      alt={actor.name}
                      className="card-img-top rounded-top"
                      style={{
                        height: "225px",
                        objectFit: "cover",
                        borderTopLeftRadius: "1rem",
                        borderTopRightRadius: "1rem",
                      }}
                    />
                    <div className="card-body p-2">
                      <h6
                        className="card-title mb-1 text-white fw-semibold"
                        style={{ fontSize: "1rem" }}
                      >
                        {actor.name}
                      </h6>
                      <p
                        className="card-text text-secondary mb-0"
                        style={{ fontSize: "0.9rem" }}
                      >
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
      <style>{`
        .actor-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .bg-opacity-85 {
          background-color: rgba(20, 20, 20, 0.85) !important;
        }
      `}</style>

      <SimilarMovies movieId={id} />
    </>
  );
};

export default MovieDetails;
