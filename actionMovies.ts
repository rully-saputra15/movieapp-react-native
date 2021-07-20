import { FavoriteMovie, Movies } from "./state";
import produce from "immer";

import { initialDataState } from "./store";
import { API_KEY } from "./settings";
import { extractAllMovie } from "./extractorAPI";
import { useImmerReducer } from "use-immer";
import { dataReducer } from "./reducers";

export const ADD_TOP_RATED_MOVIES = "ADD_TOP_RATED_MOVIES"
export const ADD_NOW_PLAYING_MOVIES = "ADD_NOW_PLAYING_MOVIES"
export const ADD_FAVORITE_MOVIES = "ADD_FAVORITE_MOVIES"
export const REMOVE_FAVORITE_MOVIES = "REMOVE_FAVORITE_MOVIES"
export const addTopRatedMovies = (topRatedMovies: Movies[]) => {
  return { type: ADD_TOP_RATED_MOVIES, payload: topRatedMovies }
}
export const addNowPlayingMovies = (nowPlayingMovies: Movies[]) => {
  return { type: ADD_NOW_PLAYING_MOVIES, payload: nowPlayingMovies }
}

export const addFavoriteMovies = (favoriteMovies: Movies) => {
  return { type: ADD_FAVORITE_MOVIES, payload: favoriteMovies }
}
export const removeFavoriteMovies = (id: number) => {
  return { type: REMOVE_FAVORITE_MOVIES, payload: id }
}
export const updateAllTopRatedMovies = (state: Movies[], response: Movies[]) => {
  return produce(state, draft => {
    draft.push(...response)
  })
}

