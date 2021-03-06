import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import {
  MOVIE_UPCOMING,
  MOVIE_TOP_RATED,
  MOVIE_POPULAR,
} from "../../services/MovieService";

export default function Header() {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-nav">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link" to={`/`}>
                Home
              </Link>
              <Link className="nav-link" to={`movie/${MOVIE_UPCOMING}`}>
                Up Coming
              </Link>
              <Link className="nav-link" to={`movie/${MOVIE_POPULAR}`}>
                Popular
              </Link>
              <Link className="nav-link" to={`movie/${MOVIE_TOP_RATED}`}>
                Top Rated
              </Link>
              <Link className="nav-link" to={`movie/${MOVIE_TOP_RATED}`}>
                Wishlist
              </Link>
              <span onClick={onLogout}>Logout</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
