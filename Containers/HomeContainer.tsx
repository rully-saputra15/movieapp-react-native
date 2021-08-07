import React, { useContext, useEffect, useState } from "react";
import HomeComponent from "../Components/HomeComponent";

import { Movies } from "../state";
import { getAllGenres, getAllTopRatedMovies } from "../API/getApi";
import LoadingComponent from "../Components/Common/LoadingComponent";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { addAllGenres, addFavoriteMovies, addFavoriteSuccessStatus, addTopRatedMovies } from "../actionMovies";
import { Context } from "../store";
import ModalFavoriteComponent from "../Components/Common/ModalFavorite";

interface HomeContainerProps {

}

type homeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
const HomeContainer: React.FC<HomeContainerProps> = () => {

  const navigation = useNavigation<homeScreenProps>();
  const [name, setName] = useState("");
  const [data, dispatch] = useContext(Context)
  //const [data, dispatch] = useImmerReducer<DataState>(dataReducer, initialDataState);
  const [isModalFavoriteOpen, setIsModalFavoriteOpen] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState<number>(0);
  useEffect(() => {
    if (data.topRatedMovies.length <= 0) {
      getAllTopRatedMovies(1)
        .then((response) => {
          if (response) {
            dispatch(addTopRatedMovies(response))
            getAllGenres()
              .then((response) => {
                if (response) {
                  dispatch(addAllGenres(response));
                }
              })
          }
        });
    }
  }, []);

  const setNameText = (input: string) => {
    setName(input);
  };

  const goToAbout = () => {
    navigation.navigate("About");
  };

  const addToFavoriteMovie = () => {
    const dataTmp: Movies[] = data.topRatedMovies.concat(data.nowPlayingMovies);
    const movie = dataTmp.find(val => val.id === selectedMovieID);
    setIsModalFavoriteOpen(false);
    if (movie) {
      dispatch(addFavoriteMovies(movie));
      setTimeout(() => {
        dispatch(addFavoriteSuccessStatus(true))
      }, 200)

      setSelectedMovieID(0);
    }
  }
  const goToDetailMovie = (id: string) => {
    navigation.push("MovieDetail", { id: id })
  };
  const openModalFavorite = (id: number) => {
    setSelectedMovieID(id);
    setIsModalFavoriteOpen(true)
  }
  const closeModalFavorite = () => {
    setIsModalFavoriteOpen(false);
  }
  return (
    <>
      {
        data.topRatedMovies.length <= 0 && data.nowPlayingMovies.length <= 0 ?
          <LoadingComponent/>
          :
          <HomeComponent name={name}
                         setNameText={setNameText}
                         topRatedMovies={data.topRatedMovies}
                         allGenresList={data.allGenres}
                         openBottomSheet={openModalFavorite}
                         goToAbout={goToAbout}
                         goToDetailMovie={goToDetailMovie}/>
      }
      {
        <ModalFavoriteComponent movieId={selectedMovieID}
                                isVisible={isModalFavoriteOpen}
                                closeModalFavorite={closeModalFavorite}
                                addToFavoriteMovie={addToFavoriteMovie}/>
      }
    </>
  );
};


export default HomeContainer;
