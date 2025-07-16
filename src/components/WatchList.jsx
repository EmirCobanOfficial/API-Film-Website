import WatchListMovie from "./WatchListMovie";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function WatchList({ movies, title }) {
  const { theme } = useContext(ThemeContext);

  return ( 
    <div
      className="watchlist-container"
      style={{
        padding: "2rem 0",
        background: theme === "dark" ? "#343a40" : "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <div
        className="watchlist-header"
        style={{
          padding: "1.5rem 2rem",
          borderBottom: "1px solid #eaeaea",
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <h2
          className={title}
          style={{
            margin: 0, 
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.5rem",
            letterSpacing: "0.5px",
          }}
        >
          🎬 Watch List
        </h2>
      </div>
      <div className="watchlist-body" style={{ padding: "2rem" }}>
        {movies.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              color: theme === "dark" ? "#ccc" : "#aaa",
              fontSize: "1.5rem",
              padding: "4rem 0",
            }}
          >
            <i className="bi bi-film me-2"></i>
            No movies found in your watch list.
          </div>
        ) : (
          <div id="movie-list" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {movies.map((m) => (
              <WatchListMovie
                key={m.id}
                movieObj={m}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
