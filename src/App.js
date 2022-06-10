import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import NotFoundPage from "./pages/NotFoundPage";
import Wishlist from "./pages/Wishlist";
import Header from "./components/Header/Header";
import "./App.css";
import MovieCategory from "./pages/MovieCategory";
import { useEffect, useState } from "react";
import AuthenticationPage from "./pages/AuthenticationPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (!currentUser) {
    }
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movie/:movieType"
          element={<PrivateRoute component={MovieCategory} />}
        />
        <Route path="/wishlist" element={<PrivateRoute component={Wishlist} />} />
        <Route
          path="/movieDetail/:id"
          element={<MovieDetail isAuthenticated={isAuthenticated} />}
        />

        <Route path="/login" element={<AuthenticationPage />} />
        {/* * đại diện cho tất cả các page không phải trang homepage hoặc movie detail */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

/*  HTTP method | endpoint
    GET /movies

    Home: =>  /
    Category: Popular, Top Rated, Upcoming => /categories/:categoryType
    Movie: /movies
    MovieDetail: /movies/:id
*/
