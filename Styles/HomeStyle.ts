import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    fontWeight:"bold"
  },
  mainFlatListIos:{
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

  },
  mainFlatListAndroid:{
    elevation: 2,
    zIndex: 2,
  },
  flatList: {
    width: wp('100%'),
    height:wp('72.5%'),
    marginTop: 8
  },
  flatListItem: {
    marginVertical:8,
    padding:24,
    marginHorizontal:16,
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
    fontWeight: "bold",
    color: "#F7F8F9",
    fontSize: hp('1.5%'),
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
