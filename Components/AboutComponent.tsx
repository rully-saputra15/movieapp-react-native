import React from "react";
import { Animated, Button, Image, Text, View } from "react-native";
import { aboutStyles } from "../Styles/AboutStyle";
import { Movies } from "../state";

interface AboutComponentProps {
  data: Movies[],
  animatedImage: Animated.Value;
}


const AboutComponent: React.FC<AboutComponentProps> = (props: AboutComponentProps) => {

  return (
    <View style={aboutStyles.mainView}>
      <Text style={aboutStyles.titleText}>Rully Saputra</Text>

    </View>

  );
};


export default AboutComponent;
