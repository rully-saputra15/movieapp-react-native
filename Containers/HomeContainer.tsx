import React, { useContext, useEffect, useState } from "react";
import HomeComponent from "../Components/HomeComponent";

import { Movies } from "../state";
import { getAllNowPlayingMovies, getAllTopRatedMovies } from "../API/getApi";
import LoadingComponent from "../Components/Common/LoadingComponent";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { addFavoriteMovies, addNowPlayingMovies, addTopRatedMovies } from "../actionMovies";
import { Context } from "../store";
import ModalFavoriteComponent from "../Components/Common/ModalFavorite";

interface HomeContainerProps {

}

type homeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
const HomeContainer: React.FC<HomeContainerProps> = (props: HomeContainerProps) => {
  const initialState = {
    allMovies: []
  };
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
            getAllNowPlayingMovies(1)
              .then((response) => {
                if (response) {
                  dispatch(addNowPlayingMovies(response));
                }
              })
          }
        });
    }
  }, [dispatch]);
  const setNameText = (input: string) => {
    setName(input);
  };

  const goToAbout = () => {
    navigation.navigate("About");
  };

  const addToFavoriteMovie = () => {
    setIsModalFavoriteOpen(false);
    const dataTmp: Movies[] = data.topRatedMovies.concat(data.nowPlayingMovies);
    const movie = dataTmp.find(val => val.id === selectedMovieID);
    if (movie) {
      dispatch(addFavoriteMovies(movie));
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
    console.log("masuk");
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
                         nowPlayingMovies={data.nowPlayingMovies}
                         openBottomSheet={openModalFavorite}
                         goToAbout={goToAbout}
                         goToDetailMovie={goToDetailMovie}/>
      }
      {
        isModalFavoriteOpen ?
          <ModalFavoriteComponent movieId={selectedMovieID}
                                  isVisible={isModalFavoriteOpen}
                                  closeModalFavorite={closeModalFavorite}
                                  addToFavoriteMovie={addToFavoriteMovie}/>
          :
          null
      }
    </>
  );
};


export default HomeContainer;
