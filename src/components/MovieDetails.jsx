import { useEffect, useState } from "react";
import { useContext, useCallback } from "react";
import { UserContext } from "../contexts/UserContext";
export default function MovieDetails({ movieObj, onClose, api_key, language }) {
  const [loadedMovie, setLoadedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(UserContext);

  const getMovieDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieObj.id}?api_key=${api_key}&language=${language}&append_to_response=credits`
      );
      if (!response.ok) {
        throw new Error("Error fetching movie details");
      }
      const data = await response.json();
      if (data) {
        setLoadedMovie(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  }, [movieObj.id, api_key, language]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return (
    <div className="my-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="title h5 mb-0">Movie Details</h2>
          <button className="btn btn-danger btn-sm" onClick={() => onClose()}>
            Close
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + movieObj.poster_path
                }
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-9">
              <h3>{movieObj.title}</h3>
              <p>{movieObj.overview}</p>
              <p>Release Date: {movieObj.release_date}</p>
              <p>Rating: {movieObj.vote_average}</p>
              {watchList.some((item) => item.id === movieObj.id) ? (
                <button
                  className="btn btn-danger mt-3 d-flex align-items-center"
                  onClick={() => removeFromWatchList(movieObj)}
                >
                  <i className="bi bi-heart-fill me-2"></i> Remove from
                  Watchlist
                </button>
              ) : (
                <button
                  className="btn btn-primary mt-3 d-flex align-items-center"
                  onClick={() => addToWatchList(movieObj)}
                >
                  <i className="bi bi-heart me-2"></i> Add to Watchlist
                </button>
              )}
              {loading && <p>Loading details...</p>}
              {loadedMovie && (
                <div>
                  <h4>Details:</h4>
                  <p>Runtime: {loadedMovie.runtime} minutes</p>
                  <p>
                    Production Companies:{" "}
                    {loadedMovie.production_companies
                      ?.map((pc) => pc.name)
                      .join(", ") || "N/A"}
                  </p>
                  <p>
                    Screenwriter:{" "}
                    {loadedMovie.credits?.crew?.find(
                      (p) => p.job === "Screenplay" || p.job === "Writer"
                    )?.name || "N/A"}
                  </p>
                  {loadedMovie.genres?.length > 0 && (
                    <div className="mt-4">
                      <h5>Genres</h5>
                      <div className="d-flex flex-wrap">
                        {loadedMovie.genres.map((genre) => (
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
                </div>
              )}

              <p className="mt-4">Actor</p>
              <div className="row">
                {loadedMovie?.credits?.cast?.slice(0, 12).map((actor) => (
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
}
