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
    backgroundColor: "#F7F8F9",
    alignItems: "center",
  },
  subView: {},
  titleText: {
    alignSelf: "flex-start",
    fontSize: hp('3%'),
    marginHorizontal: wp('3%'),
    fontFamily: fontStyles.header1.fontFamily
  },
  mainFlatListIos: {
    shadowColor: '#5C6369',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

  },
  mainFlatListAndroid: {
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: "transparent",
    elevation: 12,
  },
  headerContainerAndroid: {
    marginBottom: hp('1.5%'),
    height: hp("15%"),
    transform: [
      { scaleY: 1.5 }, { scaleX: 1.5 }
    ],
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  headerContainerIos: {
    marginBottom: hp('1.5%'),
    height: hp("15%"),
    transform: [
      { scaleY: 1.5 }, { scaleX: 1.5 }
    ],
    overflow: 'hidden',
    borderRadius: 100
  },
  searchBarContainer: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 8,
    padding: 8,
    marginHorizontal: wp('5%'),
    height: hp('8%'),
    backgroundColor: "transparent",
    marginTop: hp('-10%'),
    marginBottom: hp('3%'),
  },
  iconSearch: {
    marginRight: 4
  },
  placeholderSearchBarAndroid: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.3%'),
    fontSize: hp("1.5%"),
    backgroundColor: "rgba(18, 18, 18, 0.1)",
    color: "#121212",
    fontFamily: fontStyles.captionSmall.fontFamily,
    borderRadius: 8
  },
  placeholderSearchBarIos: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
    fontSize: hp("1.5%"),
    backgroundColor: "rgba(18, 18, 18, 0.1)",
    color: "#121212",
    fontFamily: fontStyles.captionSmall.fontFamily,
    borderRadius: 8
  },
  headerMenuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: hp('-2.5%'),
    marginBottom: hp('2.5%'),
    borderRadius: 8,
    backgroundColor: "white",
    marginHorizontal: wp('5%'),
    height: hp("10%"),
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  menuItemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  menuItemVerticalDivier: {
    borderWidth: 1,
    borderColor: "#177090",
    height: "100%"
  },
  textMenuItemContainer: {
    fontSize: hp('1.5%'),
    fontFamily: fontStyles.captionMedium.fontFamily
  },
  flatList: {
    width: wp('100%'),
    height: wp('67.5%'),
    marginVertical: hp('1%'),
  },
  genreList: {
    marginVertical: hp("2%")
  },
  flatListItem: {
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 15
    // flexDirection:"column",
    // justifyContent:"center",
    // alignItems:"center",
  },
  itemGenreContainer: {
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),

    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    width: wp('22%'),
    height: wp('22%'),
    borderRadius: wp('22%') / 2,
  },
  textItemGenre: {
    padding: 8,
    fontSize: hp("1.5%"),
    fontFamily: fontStyles.captionSmall.fontFamily,
    color: "#EEEDF0"
  },
  containerRating: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#3D3E4295",
    backgroundColor: "#F7F8F9",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  iconRating: {
    marginRight: 4,
  },
  rating: {
    color: "#121212",
    fontSize: hp('1.5%'),
    fontFamily: fontStyles.captionMedium.fontFamily
  },
  dividerInformation: {
    marginHorizontal: 8,
  },
  contentInsideMovie: {
    width: wp('40%'),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: wp('30%'),
    height: hp('20%'),
    borderRadius: 8,
    overflow: "hidden",
    resizeMode: "cover",
    marginBottom: 8
  },
  title: {
    fontSize: hp('2.5%'),
    fontWeight: "bold",
    color: "white"
  },
  subTitle: {
    color: "white"
  },
  nameTextInput: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderWidth: 0.5,
    borderRadius: 10
  }
});
