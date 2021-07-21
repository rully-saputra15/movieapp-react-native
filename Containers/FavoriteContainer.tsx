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
type favoriteScreenProps = StackNavigationProp<RootStackParamList, 'Favorite'>;

const FavoriteContainer: React.FC<FavoriteContainerProps> = (props: FavoriteContainerProps) => {
  const [data, dispatch] = useContext(Context);
  const navigation = useNavigation<favoriteScreenProps>();

  const removeFavoriteMovie = (id: number) => {
    dispatch(removeFavoriteMovies(id))
  }
  const goToDetailMovie = (id: string) => {
    navigation.push("MovieDetail", { id: id })
  };

  return (
    <FavoriteComponent data={data.FavoriteMovie}
                       goToDetailMovie={goToDetailMovie}
                       removeFavoriteMovie={removeFavoriteMovie} />
  );
};


export default FavoriteContainer;
