import React from "react";
import { Animated, Button, Image, Text, View } from "react-native";
import { aboutStyles } from "../Styles/AboutStyle";

interface AboutComponentProps {
  goToHome: () => void;
  animatedImage: Animated.Value;
}


const AboutComponent: React.FC<AboutComponentProps> = (props: AboutComponentProps) => {

  return (
    <View style={aboutStyles.mainView}>
      <Text style={aboutStyles.titleText}>Rully Saputra</Text>
      <Animated.View style={{ opacity: props.animatedImage }}>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png"
          }}
          style={aboutStyles.image}
        />
      </Animated.View>
      <Button onPress={props.goToHome} title="Go To Home"/>
    </View>

  );
};


export default AboutComponent;
