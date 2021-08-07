import React from "react";
import { Text, View } from "react-native";
import { aboutStyles } from "../Styles/AboutStyle";

interface AboutComponentProps {
  handleLoginWithAuth0: () => void;
  handleEmail: (value: string) => void;
  handlePassword: (value: string) => void;
  handleLoginWithMagicLink: () => void;
  handleSignUpWithAuth0: () => void;
  email: string;
  password: string;
}


const AboutComponent: React.FC<AboutComponentProps> = () => {

  return (
    <View style={aboutStyles.mainView}>
      <Text style={aboutStyles.titleText}>Rully Saputra</Text>
      {/*<TextInput style={aboutStyles.nameTextInput} onChangeText={props.handleEmail} value={props.email}/>*/}
      {/*<TextInput style={aboutStyles.nameTextInput} secureTextEntry={true} onChangeText={props.handlePassword} value={props.password}/>*/}
      {/*<Button onPress={props.handleLoginWithAuth0} title="Login"/>*/}
      {/*<Button onPress={props.handleSignUpWithAuth0} title="Sign Up"/>*/}
    </View>

  );
};


export default AboutComponent;
