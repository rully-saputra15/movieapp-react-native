import { DataState } from "./state";
import React from "react";
import { useImmerReducer } from "use-immer";
import { dataReducer } from "./reducers";

export const initialDataState: DataState = {
  topRatedMovies: [],
  nowPlayingMovies: [],
  FavoriteMovie: []
}

export const Context = React.createContext({
  state: initialDataState,
  dispatch: () => null
})

