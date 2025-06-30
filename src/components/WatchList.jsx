import WatchListMovie from "./WatchListMovie";

export default function WatchList({
  movies,
  isWatchListOpen,
  onRemoveFromWatchList,
}) {
  return (
    <>
      {isWatchListOpen && (
        <div className="watchlist-container" style={{ padding: "2rem 0", background: "#f5f7fa", minHeight: "100vh" }}>
          <div className="watchlist-card" style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            overflow: "hidden"
          }}>
            <div className="watchlist-header" style={{
              padding: "1.5rem 2rem",
              borderBottom: "1px solid #eaeaea",
              background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
            }}>
              <h2 className="title" style={{
                margin: 0,
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.5rem",
                letterSpacing: "0.5px"
              }}>🎬 Watch List</h2>
            </div>
            <div className="watchlist-body" style={{ padding: "2rem" }}>
              {movies.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  color: "#888",
                  fontSize: "1.1rem",
                  padding: "2rem 0"
                }}>
                  No movies found in your watch list.
                </div>
              ) : (
                <div
                  id="movie-list"
                  className="row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "1.5rem"
                  }}
                >
                  {movies.map((m, index) => (
                    <WatchListMovie
                      key={index}
                      movieObj={m}
                      onRemoveFromWatchList={onRemoveFromWatchList}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
