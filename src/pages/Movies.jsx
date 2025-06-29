import React from "react";
import { NavLink } from "react-router";

function Movies() {
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
      <div>Welcome Movies Page</div>
    </>
  );
}
export default Movies;
