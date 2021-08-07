import React, { useEffect, useRef, useState } from "react";
import { MovieDetail } from "../state";
import { getMovieData } from "../API/getApi";
import MovieDetailComponent from "../Components/MovieDetailComponent";
import { Animated, BackHandler } from "react-native";
import LoadingComponent from "../Components/Common/LoadingComponent";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { useNavigation, useRoute } from "@react-navigation/native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


interface MovieDetailProps {

}

type movieDetailScreenProp = StackNavigationProp<RootStackParamList, "MovieDetail">;
const MovieDetailContainer: React.FC<MovieDetailProps> = () => {
  const initialState = {
    movieDetail: {
      isAdult: false,
      backdropPath: "",
      budget: 0,
      genres: [],
      homepage: "",
      id: 0,
      originalTitle: "",
      description: "",
      popularity: 0,
      posterPath: "",
      status: "",
      tagline: "",
      title: "",
      productionCompanies: [],
      voteAverage: 0,
      voteCount: 0,
      releaseDate: ""
    }
  };
  const navigation = useNavigation<movieDetailScreenProp>();
  const route = useRoute();
  const urlParams: any = route.params;
  const id = urlParams ? urlParams.id : "";
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState<MovieDetail>(initialState.movieDetail);
  const [isContainerContentOpen, setIsContainerContentOpen] = useState(false);
  const bounceValue = useRef(new Animated.Value(hp('85%'))).current

  useEffect(() => {
    getMovieData(id)
      .then((response) => {
        if (response) {
          setMovieData(response);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  const toggleContainerOpen = () => {
    const toValue = isContainerContentOpen ? hp('85%') : hp('20%');
    Animated.spring(
      bounceValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: true
      }
    ).start();
    setIsContainerContentOpen(!isContainerContentOpen);
  }

  return (
    <>
      {
        isLoading ?
          <LoadingComponent/>
          :
          <MovieDetailComponent data={movieData}
                                animation={bounceValue}
                                toggleContainerOpen={toggleContainerOpen}/>

      }
    </>
  );
};


export default MovieDetailContainer;
