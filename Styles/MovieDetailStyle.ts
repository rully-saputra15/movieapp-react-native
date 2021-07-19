import { PixelRatio, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const movieDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainBackground:{
    width: wp('100%'),
    height: hp('100%')
  },
  containerImage: {
    marginVertical: 48
  },
  topLeftInformationView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topRightInformationView: {
    flex: 1,
    height: PixelRatio.getPixelSizeForLayoutSize(75),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

  },
  topInformationView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start"
  },
  // textRating: {
  //   fontSize: PixelRatio.getPixelSizeForLayoutSize(12)
  // },
  containerRating: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
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
    fontSize: hp('2%'),
  },
  containerContent: {
    width: wp('100%'),
    height: hp('100%'),
    position: "absolute",
    backgroundColor: "white",
    flexDirection: "column",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    paddingHorizontal: 24,
  },
  iconSwipeUp: {
    marginTop: 8
  },
  titleWrapper: {
    flex: 2.5,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  yearAndGenreWrapper: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  descriptionWrapper: {
    flex: 2.5,
    paddingVertical: 8,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  productionCompaniesWrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  companyList: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap"
  },
  companyWrapper: {
    width: wp("20%"),
    height: hp("10%"),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
    fontWeight: "bold"
  },
  label: {
    fontSize: hp('2.5%'),
    fontWeight: "100"
  },
  valueLabel: {
    fontSize: hp('3%'),
    fontWeight: "bold"
  },
  valueDescription: {
    fontSize: hp('1.75ex%'),
    textAlign: "justify"
  },
  valueSubTitle: {
    marginRight: 8,
    fontSize: hp('1.75%')
  },
  imagePosterBackground: {
    width: wp('80%'),
    height: hp('60%'),
    overflow: "hidden"
  },
  imagePosterStyle: {
    resizeMode: "cover",
    borderRadius: 20,
  },
  logoCompany: {
    width: wp('12.5%'),
    height: hp('5%'),
  },
  nameLogoCompany: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
  },
  divider: {
    borderBottomWidth: 5,
    borderBottomColor: "#186B8B",
    marginVertical: 8,
  },
  shapeDot: {
    width: wp('1%'),
    height: hp('1%'),
    backgroundColor: "black",
    borderRadius: Math.round(wp('1%') + hp('1%')) / 2
  }
});
