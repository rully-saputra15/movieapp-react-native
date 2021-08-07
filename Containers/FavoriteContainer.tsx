import React, { useContext } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../store";
import FavoriteComponent from "../Components/FavoriteComponent";
import { removeFavoriteMovies, removeFavoriteMovieStatus } from "../actionMovies";

interface FavoriteContainerProps {

}

type favoriteScreenProps = StackNavigationProp<RootStackParamList, 'Favorite'>;

const FavoriteContainer: React.FC<FavoriteContainerProps> = () => {
  const [data, dispatch] = useContext(Context);
  const navigation = useNavigation<favoriteScreenProps>();

  const removeFavoriteMovie = (id: number) => {
    dispatch(removeFavoriteMovies(id));
    dispatch(removeFavoriteMovieStatus(true));
  }
  const goToDetailMovie = (id: number) => {
    navigation.push("MovieDetail", { id: id.toString() })
  };

  return (
    <FavoriteComponent data={data.FavoriteMovie}
                       goToDetailMovie={goToDetailMovie}
                       removeFavoriteMovie={removeFavoriteMovie}/>
  );
};


export default FavoriteContainer;
