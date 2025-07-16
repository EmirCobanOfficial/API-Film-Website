import { useContext  } from "react";
import { UserContext } from "../contexts/UserContext";

export default function WatchListMovie({ movieObj }) {
  const { removeFromWatchList } = useContext(UserContext);
  return (
    <div className="col-md-3 col-sm-4 col-6">
      <div className="card movie position-relative h-100">
        <img
          src={
            movieObj.poster_path
              ? "https://image.tmdb.org/t/p/w500/" + movieObj.poster_path
              : "https://placehold.co/500x750?text=No+Image"
          }
          alt={movieObj.title || "No image"}
          className="img-fluid rounded-top"
          style={{ objectFit: "cover", height: "100%" }}
        />
        <div className="card-body p-2 d-flex flex-column justify-content-between">
          <h5 className="card-title text-truncate">{movieObj.title}</h5>
          <button
            className="btn btn-danger mt-2 align-self-start" 
            onClick={() => removeFromWatchList(movieObj)}
          >
            <i className="bi bi-dash-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
