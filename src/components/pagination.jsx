import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Pagination({
  page,
  totalPages,
  setSearchParams,
  query,
}) {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "light" : "dark";

  return (
    <div className="container py-3">
      <div className="border p-3">
        <div className="d-flex justify-content-between align-items center">
          <button
            className={`btn btn-outline-${textColor}`}
            onClick={() =>
              setSearchParams({ q: query, page: Number(page) - 1 })
            }
            disabled={Number(page) <= 1}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages > 500 ? 500 : totalPages}
          </span>
          <button
            className="btn btn-primary"
            onClick={() =>
              setSearchParams({ q: query, page: Number(page) + 1 })
            }
            disabled={Number(page) >= (totalPages > 500 ? 500 : totalPages)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
