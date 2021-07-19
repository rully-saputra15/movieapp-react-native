import { extractAllMovie, extractMovieDetail } from "../extractorAPI";
import { API_KEY } from "../settings";

export const getAllTopRatedMovies = async (numberOfPages: number) => {
  try {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY + "&language=en-US&page=" + numberOfPages
    );
    let json = await response.json();
    return extractAllMovie(json.results);
  } catch (error) {
    console.error(error);
  }
};

export const getMovieData = async (id: string) => {
  try {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + API_KEY + "&language=en-US"
    );
    let json = await response.json();
    return extractMovieDetail(json);
  } catch (error) {
    console.error(error);
  }
};