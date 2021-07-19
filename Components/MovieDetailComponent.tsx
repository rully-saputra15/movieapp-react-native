import React from "react";
import { Animated, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { MovieDetail, ProductionCompany } from "../state";
import { IMAGE_URL } from "../settings";
import { Avatar, Divider, Icon } from "react-native-elements";
import { movieDetailStyles } from "../Styles/MovieDetailStyle";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


interface MovieDetailComponentProps {
  data: MovieDetail;
  animation: Animated.Value;
  toggleSwipeUp: () => void;
}


const MovieDetailComponent: React.FC<MovieDetailComponentProps> = (props: MovieDetailComponentProps) => {
  const colorBadge = ["primary", "success", "warning", "error"]
  const generateGenre = () => {
    let genresName: string[] = []
    props.data.genres.forEach((genre) => {
      genresName.push(genre.name)
    });
    return genresName.join("/").toUpperCase();
  }
  return (
    <View style={movieDetailStyles.container} key={props.data.id} >
      <ImageBackground source={{
        uri: IMAGE_URL + props.data.backdropPath
      }} style={movieDetailStyles.mainBackground} blurRadius={80} resizeMode="cover">
        <View style={movieDetailStyles.mainView}>
          <View style={movieDetailStyles.containerImage}>
            <ImageBackground style={movieDetailStyles.imagePosterBackground}
                             imageStyle={movieDetailStyles.imagePosterStyle} source={{
              uri: IMAGE_URL + props.data.posterPath,
            }}>
              <View style={movieDetailStyles.containerRating}>
                <Icon type="ionicon"
                      name="star"
                      color="#F7F8F9"
                      size={hp('2%')}
                      style={movieDetailStyles.iconRating}/>
                <Text style={movieDetailStyles.rating}>{props.data.voteAverage.toString()}</Text>
              </View>
            </ImageBackground>
          </View>
          <Animated.View style={[movieDetailStyles.containerContent,
            { transform: [{ translateY: props.animation }] }]}>
            <Icon type="material" name="maximize" style={movieDetailStyles.iconSwipeUp}/>
            <TouchableOpacity style={movieDetailStyles.content} onPress={props.toggleSwipeUp} activeOpacity={100}>
              <Text style={movieDetailStyles.valueLabel}
                    numberOfLines={1}
                    ellipsizeMode="tail">{props.data.title}</Text>
              <View style={movieDetailStyles.yearAndGenreWrapper}>
                <Text style={movieDetailStyles.valueSubTitle}>{props.data.releaseDate.substring(0, 4)}</Text>
                <Divider orientation="vertical" color="black" width={5} style={movieDetailStyles.valueSubTitle}/>
                <Text style={movieDetailStyles.valueSubTitle}>{generateGenre()}</Text>
              </View>
              <Text style={movieDetailStyles.valueDescription}>{props.data.description}</Text>
              <Divider
                orientation="vertical"
                color="#186B8B"
                style={movieDetailStyles.divider}
              />
              <View style={movieDetailStyles.productionCompaniesWrapper}>
                <Text style={movieDetailStyles.label}>Film House</Text>
                <View style={movieDetailStyles.companyList}>
                  {
                    props.data.productionCompanies.map((company: ProductionCompany) => {
                      return <View style={movieDetailStyles.companyWrapper}>
                        <Avatar rounded style={movieDetailStyles.logoCompany} source={{
                          uri: IMAGE_URL + company.logoPath
                        }}
                        />
                        <Text numberOfLines={1} ellipsizeMode="tail"
                              style={movieDetailStyles.nameLogoCompany}>{company.name}</Text>
                      </View>
                    })
                  }
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>

    </View>
  );
};


export default MovieDetailComponent;


// <View style={movieDetailStyles.topInformationView}>
//   <View style={movieDetailStyles.topLeftInformationView}>
//     <Image style={movieDetailStyles.imagePoster} source={{
//       uri: IMAGE_URL + props.data.posterPath,
//     }}
//     />
//   </View>
//   <View style={movieDetailStyles.topRightInformationView}>
//     <Text style={movieDetailStyles.textRating}>Rating</Text>
//     <Text style={movieDetailStyles.rating}>{props.data.voteAverage.toString()}</Text>
//   </View>
// </View>
// <View style={movieDetailStyles.genreWrapper}>
//   {
//     props.data.genres.map((genre, index) => {
//       return <Badge value={genre.name} status={colorBadge[index]}/>
//     })
//   }
// </View>
// <View style={movieDetailStyles.titleWrapper}>
//   <Text style={movieDetailStyles.label}>Title</Text>
//   <Text style={movieDetailStyles.valueLabel}>{props.data.title}</Text>
// </View>
// <Divider
//   orientation="vertical"
//   color="#186B8B"
//   style={movieDetailStyles.divider}
// />
// <View style={movieDetailStyles.descriptionWrapper}>
//   <Text style={movieDetailStyles.label}>Description</Text>
//   <Text style={movieDetailStyles.description}>{props.data.description}</Text>
// </View>
// <Divider
//   orientation="vertical"
//   color="#186B8B"
//   style={movieDetailStyles.divider}
// />
// <View style={movieDetailStyles.productionCompaniesWrapper}>
//   <Text style={movieDetailStyles.label}>Film House</Text>
//   <View style={movieDetailStyles.companyList}>
//     {
//       props.data.productionCompanies.map((company: ProductionCompany) => {
//         return <View style={movieDetailStyles.companyWrapper}>
//           <Avatar rounded style={movieDetailStyles.logoCompany}  source={{
//             uri: IMAGE_URL + company.logoPath
//           }}
//           />
//           <Text numberOfLines={1} ellipsizeMode="tail" style={movieDetailStyles.nameLogoCompany}>{company.name}</Text>
//         </View>
//       })
//     }
//   </View>
//
// </View>
