import { StyleSheet } from "react-native";
import { fontStyles } from "./fontStyles";

export const aboutStyles = StyleSheet.create({

  mainView: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  subView: {},
  titleText: {
    fontSize: 24,
    marginTop: 16,
    fontFamily:fontStyles.header1.fontFamily
  },
  flatList: {
    flex: 2,
    marginTop: 8
  },
  flatListItem: {
    fontSize: 18
  },
  image: {
    flex: 0.5,
    width: 200,
    height: 200
  },
  nameTextInput: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderWidth: 0.5,
    borderRadius: 10
  }
});
