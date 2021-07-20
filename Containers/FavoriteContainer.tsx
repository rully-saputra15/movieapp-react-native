import React, { useEffect, useRef,useContext } from "react";
import AboutComponent from "../Components/AboutComponent";
import { RouteComponentProps } from "react-router";
import { Animated, Easing } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { useImmerReducer } from "use-immer";
import { dataReducer } from "../reducers";
import { DataState } from "../state";
import { Context, initialDataState } from "../store";
import produce from "immer";
import FavoriteComponent from "../Components/FavoriteComponent";
import { removeFavoriteMovies } from "../actionMovies";

interface FavoriteContainerProps {

}

const FavoriteContainer: React.FC<FavoriteContainerProps> = (props: FavoriteContainerProps) => {
  const [data, dispatch] = useContext(Context);

  const removeFavoriteMovie = (id: number) => {
    dispatch(removeFavoriteMovies(id))
  }
  return (
    <FavoriteComponent data={data.FavoriteMovie} removeFavoriteMovie={removeFavoriteMovie} />
  );
};


export default FavoriteContainer;
