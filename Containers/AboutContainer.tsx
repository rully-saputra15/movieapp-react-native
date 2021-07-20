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

interface AboutContainerProps {

}
type aboutScreenProp = StackNavigationProp<RootStackParamList,'About'>

const AboutContainer: React.FC<AboutContainerProps> = (props: AboutContainerProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [data, dispatch] = useContext(Context);
  useEffect(() => {
    Animated.timing(

      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.back(1),
        isInteraction: false,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <AboutComponent data={data.topRatedMovies} animatedImage={fadeAnim} />
  );
};


export default AboutContainer;
