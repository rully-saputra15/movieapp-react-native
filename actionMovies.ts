import { Genre, Movies } from "./state";
import produce from "immer";

export const ADD_TOP_RATED_MOVIES = "ADD_TOP_RATED_MOVIES"
export const ADD_NOW_PLAYING_MOVIES = "ADD_NOW_PLAYING_MOVIES"
export const ADD_FAVORITE_MOVIES = "ADD_FAVORITE_MOVIES"
export const REMOVE_FAVORITE_MOVIES = "REMOVE_FAVORITE_MOVIES"
export const ADD_FAVORITE_STATUS = "ADD_FAVORITE_STATUS"
export const REMOVE_FAVORITE_MOVIE_STATUS = "REMOVE_FAVORITE_MOVIE_STATUS"

export const ADD_ALL_GENRES = "ADD_ALL_GENRES";
export const addTopRatedMovies = (topRatedMovies: Movies[]) => {
  return { type: ADD_TOP_RATED_MOVIES, payload: topRatedMovies }
}
export const addNowPlayingMovies = (nowPlayingMovies: Movies[]) => {
  return { type: ADD_NOW_PLAYING_MOVIES, payload: nowPlayingMovies }
}

export const addFavoriteMovies = (favoriteMovies: Movies) => {
  return { type: ADD_FAVORITE_MOVIES, payload: favoriteMovies }
}
export const addAllGenres = (allGenres: Genre[]) => {
  return {type: ADD_ALL_GENRES, payload: allGenres}
}
export const removeFavoriteMovies = (id: number) => {
  return { type: REMOVE_FAVORITE_MOVIES, payload: id }
}

export const removeFavoriteMovieStatus = (status: boolean) => {
  return { type: REMOVE_FAVORITE_MOVIE_STATUS, payload: status }
}
export const addFavoriteSuccessStatus = (status: boolean) => {
  return { type: ADD_FAVORITE_STATUS, payload: status }
}
export const updateAllTopRatedMovies = (state: Movies[], response: Movies[]) => {
  return produce(state, draft => {
    draft.push(...response)
  })
}

