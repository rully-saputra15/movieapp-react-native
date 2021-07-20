import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { BottomSheet, Icon, ListItem } from "react-native-elements";

interface BottomSheetComponent {
  movieId: number;
  isVisible: boolean;
  addToFavoriteMovie: () => void;
}


const BottomSheetComponent: React.FC<BottomSheetComponent> = (props: BottomSheetComponent) => {

  return (
    <BottomSheet isVisible={props.isVisible}>
      <ListItem onPress={props.addToFavoriteMovie}>
        <Icon type="ionicon" name="heart"/>
        <ListItem.Content>
          <ListItem.Title>Add To Favorite</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </BottomSheet>
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
export default BottomSheetComponent;
