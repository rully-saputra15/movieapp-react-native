import { DataState } from "./state";
import React from "react";

export const initialDataState: DataState = {
  topRatedMovies: [],
  nowPlayingMovies: [],
  FavoriteMovie: [],
  allGenres:[],
  successfullyAddFavoriteMovie: false,
  successfullyRemoveFavoriteMovie: false
}

export const Context = React.createContext({
  state: initialDataState,
  dispatch: () => null
})

