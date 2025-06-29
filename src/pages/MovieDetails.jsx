import React from "react";
import { NavLink } from "react-router";

function MovieDetails() {
  return (
    <>
      <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/movies" end>
                Movies
              </NavLink>
              <NavLink to="/movies/1" end>
                Movie Details
              </NavLink>
            </nav>
      <div>Welcome Movie Details Page</div>
    </>
  );
}

export default MovieDetails;
