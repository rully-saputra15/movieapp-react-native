import { Draft } from "immer"
import { DataState } from "./state";
import * as actionMovies from "./actionMovies";

const changeStatusFavoriteMovieIndex = (draft: Draft<DataState>, id: number) => {
  const topRatedMovieIndex = draft.topRatedMovies.findIndex(val => val.id === id);
  if (topRatedMovieIndex >= 0) {
    draft.topRatedMovies[topRatedMovieIndex].isFavorite = !draft.topRatedMovies[topRatedMovieIndex].isFavorite
    return draft;
  } else {
    const nowPlayingMovieIndex = draft.nowPlayingMovies.findIndex(val => val.id === id);
    draft.nowPlayingMovies[nowPlayingMovieIndex].isFavorite = !draft.nowPlayingMovies[nowPlayingMovieIndex].isFavorite
    return draft;
  }
}
export const dataReducer = (draft: Draft<DataState>, action: any) => {
  switch (action.type) {
    case actionMovies.ADD_TOP_RATED_MOVIES:
      return void draft.topRatedMovies.push(...action.payload)
    case actionMovies.ADD_NOW_PLAYING_MOVIES:
      return void draft.nowPlayingMovies.push(...action.payload)
    case actionMovies.ADD_ALL_GENRES:
      return void draft.allGenres.push(...action.payload)
    case actionMovies.ADD_FAVORITE_MOVIES:
      draft = changeStatusFavoriteMovieIndex(draft, action.payload.id);
      const draftIdx = draft.FavoriteMovie.findIndex(val => val.id === action.payload.id);
      if (draftIdx === -1) {
        return void draft.FavoriteMovie.push({
          id: action.payload.id,
          title: action.payload.title,
          posterPath: action.payload.posterPath,
          voteAverage: action.payload.voteAverage
        })
      } else {
        return void draft.FavoriteMovie.splice(draftIdx, 1);
      }
    case actionMovies.REMOVE_FAVORITE_MOVIES:
      draft = changeStatusFavoriteMovieIndex(draft, action.payload);
      const draftIndex = draft.FavoriteMovie.findIndex(val => val.id === action.payload);
      return void draft.FavoriteMovie.splice(draftIndex, 1);
    case actionMovies.ADD_FAVORITE_STATUS:
      draft.successfullyAddFavoriteMovie = action.payload
      break;
    case actionMovies.REMOVE_FAVORITE_MOVIE_STATUS:
      draft.successfullyRemoveFavoriteMovie = action.payload
      break;
  }
}
