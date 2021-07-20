import React, { useContext, useEffect, useState } from "react";
import HomeComponent from "../Components/HomeComponent";

import { DataState, Movies } from "../state";
import { getAllNowPlayingMovies, getAllTopRatedMovies } from "../API/getApi";
import LoadingComponent from "../Components/Common/LoadingComponent";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useImmerReducer } from "use-immer";
import { ADD_NOW_PLAYING_MOVIES, addFavoriteMovies, addNowPlayingMovies, addTopRatedMovies } from "../actionMovies";
import { Context, initialDataState } from "../store";
import { dataReducer } from "../reducers";
import * as status from "../status";
import BottomSheetComponent from "../Components/Common/BottomSheet";

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
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
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
    const dataTmp: Movies[] = data.topRatedMovies.concat(data.nowPlayingMovies);
    const movie = dataTmp.find(val => val.id === selectedMovieID);
    if (movie) {
      dispatch(addFavoriteMovies(movie));
      setSelectedMovieID(0);
      setIsBottomSheetVisible(false);
    }

  }
  const goToDetailMovie = (id: string) => {
    navigation.push("MovieDetail", { id: id })
  };
  const openBottomSheet = (id: number) => {
    setSelectedMovieID(id);
    setIsBottomSheetVisible(true)
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
                         openBottomSheet={openBottomSheet}
                         goToAbout={goToAbout}
                         goToDetailMovie={goToDetailMovie}/>
      }
      {
        isBottomSheetVisible ?
          <BottomSheetComponent movieId={selectedMovieID}
                                isVisible={isBottomSheetVisible}
                                addToFavoriteMovie={addToFavoriteMovie}/>
          :
          null
      }
    </>
  );
};


export default HomeContainer;
