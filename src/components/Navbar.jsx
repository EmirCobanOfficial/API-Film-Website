import Logo from "../components/Logo";
import { NavLink } from "react-router";
import SearchForm from "./SearchForm";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item me-2">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item me-2">
              <NavLink className="nav-link" aria-current="page" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
          <SearchForm />
        </div>
      </div>
    </nav>
  );
}
