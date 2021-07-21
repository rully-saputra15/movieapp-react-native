import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fontStyles } from "./fontStyles";

export const homeStyles = StyleSheet.create({

  mainSafeArea: {},
  mainView: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor:"#F7F8F9",
    alignItems: "center",
  },
  subView: {},
  titleText: {
    alignSelf:"flex-start",
    fontSize: hp('3%'),
    margin: 16,
    fontFamily: fontStyles.header1.fontFamily
  },
  mainFlatListIos:{
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

  },
  mainFlatListAndroid:{
    marginHorizontal:8,
    marginVertical:8,
    backgroundColor:"transparent",
    elevation: 12,
  },
  flatList: {
    width: wp('100%'),
    height:wp('67.5%'),
    marginTop: 8,
  },
  flatListItem: {
    marginVertical:8,
    paddingVertical:16,
    paddingHorizontal: 8,
    marginHorizontal:8,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  containerRating: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D3E4295",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  iconRating: {
    marginRight: 4,
  },
  rating: {
    color: "#F7F8F9",
    fontSize: hp('1.5%'),
    fontFamily: fontStyles.captionMedium.fontFamily
  },
  contentInsideMovie:{
    width:wp('40%'),
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  image: {
    width: wp('50%'),
    height: hp('20%'),
    resizeMode:"contain",
    borderRadius: 20,
    marginBottom: 8,
  },
  title:{
    fontSize:hp('2.5%'),
    fontWeight:"bold",
    color:"white"
  },
  subTitle:{
    color:"white"
  },
  nameTextInput: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderWidth: 0.5,
    borderRadius: 10
  }
});
