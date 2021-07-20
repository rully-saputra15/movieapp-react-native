import React from "react"
import produce, { Draft } from "immer"
import { useImmerReducer } from "use-immer";
import { DataState, Movies, State } from "./state";
import { initialDataState } from "./store";
import * as actionMovies from "./actionMovies";


export const dataReducer = (draft: Draft<DataState>, action: any) => {
  switch (action.type) {
    case actionMovies.ADD_TOP_RATED_MOVIES:
      return void draft.topRatedMovies.push(...action.payload)
    case actionMovies.ADD_NOW_PLAYING_MOVIES:
      return void draft.nowPlayingMovies.push(...action.payload)
    case actionMovies.ADD_FAVORITE_MOVIES:
      return void draft.FavoriteMovie.push({
        id: action.payload.id,
        title: action.payload.title,
        posterPath: action.payload.posterPath,
        voteAverage: action.payload.voteAverage
      })
    case actionMovies.REMOVE_FAVORITE_MOVIES:
      const draftIndex = draft.FavoriteMovie.findIndex(val => val.id === action.payload);
      return void draft.FavoriteMovie.splice(draftIndex, 1)
  }
}
