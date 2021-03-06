import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSlider from "../../components/HeroSlider";
import Loader from "../../components/Loader";
import MovieService from "../../services/MovieService";
import {
  MOVIE_UPCOMING,
  MOVIE_TOP_RATED,
  MOVIE_POPULAR,
  MOVIE_NOW_PLAYING,
} from "../../services/MovieService";
import CategorySwiper from "../../components/CategorySwiper";
import "./HomePage.css";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  // const [idList, setIdList] = useState([]);
  // const [posterPaths, setPosterPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  /* const onViewMore = (movieType, id) => {
    navigation(`/movie/${movieType}/${id}`);
  }; */

  const onViewMore = (id) => {
    navigation(`/movieDetail/${id}`);
  };

  async function fetchData() {
    setLoading(true);
    const moviePopular = await MovieService.getMovieByType(MOVIE_POPULAR);
    const movieUpcoming = await MovieService.getMovieByType(MOVIE_UPCOMING);
    const movieTopRated = await MovieService.getMovieByType(MOVIE_TOP_RATED);
    const movieNowPlaying = await MovieService.getMovieByType(
      MOVIE_NOW_PLAYING
    );

    setPopularMovies(moviePopular);
    setUpcomingMovies(movieUpcoming);
    setTopRatedMovies(movieTopRated);
    setNowPlaying(movieNowPlaying);

    setLoading(false);
  }

  // call API
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* render with condition. Only rendering when the data is ready */}
      {/* render multi child components with only one condition */}
      {loading === true ? (
        <Loader />
      ) : (
        [
          <HeroSlider nowPlaying={nowPlaying} onViewMore={onViewMore} />,
          <CategorySwiper
            movieList={upcomingMovies}
            onViewMore={onViewMore}
            movieType={MOVIE_UPCOMING}
          />,
          <CategorySwiper
            movieList={popularMovies}
            onViewMore={onViewMore}
            movieType={MOVIE_POPULAR}
          />,
          <CategorySwiper
            movieList={topRatedMovies}
            onViewMore={onViewMore}
            movieType={MOVIE_TOP_RATED}
          />,
        ]
      )}
    </div>
  );
};

export default HomePage;
