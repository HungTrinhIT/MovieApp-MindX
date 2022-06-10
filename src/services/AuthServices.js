import axios from "axios";
import { API_KEY, base_URL } from "../constant/const-key";
export const MOVIE_UPCOMING = "upcoming";
export const MOVIE_POPULAR = "popular";
export const MOVIE_TOP_RATED = "top_rated";
export const MOVIE_NOW_PLAYING = "now_playing";

// create an object MovieService has many keys (functions)
const AuthService = {
  createNewToken: () =>
    axios.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
    ),
  createNewSession: (user, request_token) => {
    const body = {
      username: user.username,
      password: user.password,
      request_token,
    };
    return axios.post(
      `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`,
      body
    );
  },
};
// export default khi import không cần dùng destructuring
export default AuthService;
