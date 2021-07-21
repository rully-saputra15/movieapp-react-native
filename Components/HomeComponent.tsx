import React from "react";
import { FlatList, Image, ImageBackground, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { Movies } from "../state";
import { Icon } from "react-native-elements";
import { IMAGE_URL } from "../settings";
import { homeStyles } from "../Styles/HomeStyle";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


interface AppComponentProps {
  name: string,
  setNameText: (input: string) => void,
  topRatedMovies: Movies[],
  nowPlayingMovies: Movies[],
  goToAbout: () => void;
  openBottomSheet: (id: number) => void;
  goToDetailMovie: (id: string) => void;
}


const HomeComponent: React.FC<AppComponentProps> = (props: AppComponentProps) => {
  const renderItem = (item: Movies) => {
    return <ImageBackground style={homeStyles.flatListItem}
                            blurRadius={50}
                            borderRadius={15}
                            source={{
                              uri: IMAGE_URL + item.backdropPath
                            }}
    >
      <View style={homeStyles.contentInsideMovie}>
        <Image style={homeStyles.image}
               source={{ uri: IMAGE_URL + item.posterPath }}/>
        {/*<Text style={homeStyles.title} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>*/}
        <View style={homeStyles.containerRating}>
          <Icon type="ionicon"
                name="star"
                color="#FDFD96"
                size={hp('1.5%')}
                style={homeStyles.iconRating}/>
          <Text style={homeStyles.rating}>{item.voteAverage.toString()}</Text>
        </View>
      </View>
    </ImageBackground>
  }

  const renderList = (item: Movies) => {
    // return Platform.OS === 'android' ?
    //   <TouchableNativeFeedback key={item.id}
    //                                 style={homeStyles.mainFlatList}
    //                            background={TouchableNativeFeedback.Ripple('#00000040', false)}
    //                            useForeground={true}
    //                                 onPress={() => props.goToDetailMovie(item.id.toString())}>
    //   {renderItem(item)}
    // </TouchableNativeFeedback>
    // :
    // <TouchableOpacity key={item.id}
    //                          activeOpacity={95}
    //                          style={homeStyles.mainFlatList}
    //                          onPress={() => props.goToDetailMovie(item.id.toString())}>
    //   {renderItem(item)}
    // </TouchableOpacity>

    return       <Pressable key={item.id}
                            delayLongPress={200}
                            android_ripple={{color:"#808080", radius:150}}
                            style={Platform.OS === 'android' ?  homeStyles.mainFlatListAndroid: homeStyles.mainFlatListIos}
                            onPress={() => props.goToDetailMovie(item.id.toString())}
                            onLongPress={() => props.openBottomSheet(item.id)}>
      {renderItem(item)}
    </Pressable>
  };

  return (
    <View style={homeStyles.mainView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={homeStyles.titleText}>Top Rated Movies</Text>
        <FlatList style={homeStyles.flatList}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  data={props.topRatedMovies}
                  renderItem={item => renderList(item.item)}/>
        <Text style={homeStyles.titleText}>Now Playing</Text>
        <FlatList style={homeStyles.flatList}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.title.toString()}
                  data={props.nowPlayingMovies}
                  renderItem={item => renderList(item.item)}/>
      </ScrollView>

    </View>
  );
};


export default HomeComponent;
