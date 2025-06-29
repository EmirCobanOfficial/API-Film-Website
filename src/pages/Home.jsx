import React from "react";
import { NavLink } from "react-router";

function Home() {
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
      <div>Welcome Home Page</div>
    </>
  );
}

export default Home;
