import React, { useEffect, useRef } from "react";
import AboutComponent from "../Components/AboutComponent";
import { RouteComponentProps } from "react-router";
import { Animated, Easing } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

interface AboutContainerProps extends RouteComponentProps<any> {

}
type aboutScreenProp = StackNavigationProp<RootStackParamList,'About'>

const AboutContainer: React.FC<AboutContainerProps> = (props: AboutContainerProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<aboutScreenProp>();

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
  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <AboutComponent goToHome={goToHome} animatedImage={fadeAnim} />
  );
};


export default AboutContainer;
