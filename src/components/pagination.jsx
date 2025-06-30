export default function Pagination({
  page,
  totalPages,
  setSearchParams,
  query,
}) {
  return (
    <div className="container my-3">
      <div className="card card-body">
        <div className="d-flex justify-content-between align-items center">
          <button
            className="btn btn-primary"
            onClick={() =>
              setSearchParams({ q: query, page: Number(page) - 1 })
            }
            disabled={Number(page) <= 1}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="btn btn-primary"
            onClick={() =>
              setSearchParams({ q: query, page: Number(page) + 1 })
            }
            disabled={Number(page) >= totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
