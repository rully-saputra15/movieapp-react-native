import React, { useEffect, useState } from "react";
import HomeComponent from "../Components/HomeComponent";

import { AllMovies } from "../state";
import { getAllTopRatedMovies } from "../API/getApi";
import LoadingComponent from "../Components/Common/LoadingComponent";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";


interface HomeContainerProps {

}

type homeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
const HomeContainer: React.FC<HomeContainerProps> = (props: HomeContainerProps) => {
  const initialState = {
    allMovies: []
  };
  const navigation = useNavigation<homeScreenProps>();
  const [name, setName] = useState("");
  const [data, setData] = useState<AllMovies[]>(initialState.allMovies);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTopRatedMovies(1)
      .then((response) => {
        if (response) {
          setData(response);
          setIsLoading(false);
        }
      });
  }, []);
  const setNameText = (input: string) => {
    setName(input);
  };

  const goToAbout = () => {
    navigation.navigate("About");
  };

  const goToDetailMovie = (id: string) => {
    navigation.push("MovieDetail", { id: id })
  };

  return (
    <>
      {
        isLoading ?
          <LoadingComponent/>
          :
          <HomeComponent name={name}
                         setNameText={setNameText}
                         data={data}
                         goToAbout={goToAbout}
                         goToDetailMovie={goToDetailMovie}/>
      }
    </>
  );
};


export default HomeContainer;
