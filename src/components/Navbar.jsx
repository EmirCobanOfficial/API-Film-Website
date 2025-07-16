import Logo from "../components/Logo";
import { NavLink } from "react-router";
import SearchForm from "./SearchForm";
import ThemeSelector from "./ThemeSelector";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${theme} border-bottom border-body`}
      data-bs-theme={theme}
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
          <ThemeSelector />
        </div>
      </div>
    </nav>
  );
}
