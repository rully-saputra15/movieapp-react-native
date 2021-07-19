import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({

  mainSafeArea: {},
  mainView: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 16,
    alignItems: "center",
    backgroundColor: "white"
  },
  subView: {},
  titleText: {
    fontSize: 16,
    marginTop: 16
  },
  flatList: {
    flex: 2,
    width: "100%",
    marginTop: 8
  },
  flatListItem: {
    marginVertical: 8
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
