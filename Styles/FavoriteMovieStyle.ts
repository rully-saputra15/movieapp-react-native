import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { fontStyles } from "./fontStyles";

export const favoriteMovieStyle = StyleSheet.create({

  mainView: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  flatListStyle: {
    marginTop: hp('8%'),
    width: wp("90%"),
    height: hp("100%")
  },
  flatListTitle:{
    fontFamily: fontStyles.captionSmall.fontFamily
  }
});
