import { Link } from "react-router";

export default function Movie({ movieObj }) {
  const imageSrc = movieObj.poster_path
    ? "https://image.tmdb.org/t/p/original/" + movieObj.poster_path
    : "https://placehold.co/150x225?text=No+Image";

  return (
    <div className="col">
      <div className="card movie shadow-lg border-0 rounded-4 overflow-hidden h-100 bg-dark text-white position-relative">
        <Link to={`/movies/${movieObj.id}`} className="d-block">
          <img
            src={imageSrc}
            alt={movieObj.title || "No image"}
            className="card-img-top object-fit-cover"
            style={{
              height: "350px",
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.3s",
              borderRadius: "0 0 1rem 1rem",
            }}
          />
        </Link>
        <div className="card-body d-flex flex-column justify-content-between">
          <h2 className="h5 card-title mb-2 text-truncate">{movieObj.title}</h2>
          <div className="d-flex align-items-center justify-content-between mt-2">
            <span className="badge bg-primary fs-6">
              ⭐ {movieObj.vote_average?.toFixed(1)}
            </span>
            <span className="text-secondary small">
              {movieObj.release_date?.slice(0, 4)}
            </span>
          </div>
        </div>
        <Link
          to={`/movies/${movieObj.id}`}
          className="stretched-link"
          aria-label={`View details for ${movieObj.title}`}
        />
      </div>
    </div>
  );
}
