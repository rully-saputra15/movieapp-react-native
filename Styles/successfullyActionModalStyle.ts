import { PixelRatio, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { fontStyles } from "./fontStyles";

export const successfullyActionModalStyles = StyleSheet.create({

  mainView: {
    backgroundColor: '#00000030',
    height:hp("100%"),
    justifyContent:"center",
    alignContent:"center"
  },
  modalView:{

    margin:20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    alignSelf:"center",
    alignContent:"stretch",
    alignItems:"center",
    justifyContent:"flex-start",
    shadowColor:"#000",
    shadowOffset:{
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button:{

  },
  captionText:{
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    fontFamily:fontStyles.header1.fontFamily
  },
  buttonMainContent:{
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    padding:8,
  },
  spinner: {
    color: "#0E223A"
  }
});
