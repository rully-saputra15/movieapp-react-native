import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

interface LoadingComponentProps {

}


const LoadingComponent: React.FC<LoadingComponentProps> = (props: LoadingComponentProps) => {

  return (
    <View style={styles.mainView}>
      <ActivityIndicator color="#0E223A" animating={true} size="large" />
    </View>

  );
};

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  spinner: {
    color: "#0E223A"
  }
});
export default LoadingComponent;
