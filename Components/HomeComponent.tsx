import React from "react";
import { FlatList, Image, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Genre, Movies } from "../state";
import { Divider, Icon } from "react-native-elements";
import { IMAGE_URL } from "../settings";
import { homeStyles } from "../Styles/HomeStyle";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ICON_MENU_STYLE, ICON_SEARCHBAR_STYLE } from "../styleTemplate";
import { LinearGradient } from "expo-linear-gradient";
import { GRADIENT_MAIN_COLOR } from "../colorSettings";


interface AppComponentProps {
  name: string,
  setNameText: (input: string) => void,
  topRatedMovies: Movies[],
  allGenresList: Genre[],
  goToAbout: () => void;
  openBottomSheet: (id: number) => void;
  goToDetailMovie: (id: string) => void;
}


const HomeComponent: React.FC<AppComponentProps> = (props: AppComponentProps) => {

  const renderGenreList = (item: Genre) => {
    return <LinearGradient colors={GRADIENT_MAIN_COLOR}
                           end={{ x: 0.1, y: 0.9 }}
                           style={homeStyles.itemGenreContainer}>
      <Text style={homeStyles.textItemGenre} numberOfLines={2}>{item.name}</Text>
    </LinearGradient>
  }

  const renderItem = (item: Movies) => {
    return <LinearGradient style={homeStyles.flatListItem}
                           colors={GRADIENT_MAIN_COLOR}
                           end={{ x: 0.1, y: 0.9 }}
    >
      <View style={homeStyles.contentInsideMovie}>
        <Image style={homeStyles.image}
               source={{ uri: IMAGE_URL + item.posterPath }}/>
        <View style={homeStyles.containerRating}>
          <Icon type="ionicon"
                name="star"
                color="#666600"
                size={hp('1.5%')}
                style={homeStyles.iconRating}/>
          <Text style={homeStyles.rating}>{item.voteAverage.toString()}</Text>
          <Divider orientation="vertical" style={homeStyles.dividerInformation}/>
          <Icon type="ionicon"
                name={item.isFavorite ? "heart" : "heart-outline"}
                color="#800020"
                size={hp('2%')}/>
        </View>

      </View>
    </LinearGradient>
  }


  const renderList = (item: Movies) => {
    return <Pressable key={item.id}
                      delayLongPress={200}
                      android_ripple={{ color: "#808080", radius: 150 }}
                      style={Platform.OS === 'android' ? homeStyles.mainFlatListAndroid : homeStyles.mainFlatListIos}
                      onPress={() => props.goToDetailMovie(item.id.toString())}
                      onLongPress={() => props.openBottomSheet(item.id)}>
      {renderItem(item)}
    </Pressable>
  };

  return (
    <View style={homeStyles.mainView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={GRADIENT_MAIN_COLOR}
                        end={{ x: 0.7, y: 0.5 }}
                        style={Platform.OS === 'android' ? homeStyles.headerContainerAndroid : homeStyles.headerContainerIos}/>
        <View style={homeStyles.searchBarContainer}>
          <Icon name="search"
                size={hp(ICON_SEARCHBAR_STYLE)}
                style={homeStyles.iconSearch}/>
          <TextInput style={Platform.OS === 'android' ? homeStyles.placeholderSearchBarAndroid : homeStyles.placeholderSearchBarIos}
                       keyboardAppearance="default"
                       placeholder="Find your movie!"/>

        </View>
        <View style={homeStyles.headerMenuContainer}>
          <View style={homeStyles.menuItemContainer}>
            <Icon name="star" size={hp(ICON_MENU_STYLE)}/>
            <Text style={homeStyles.textMenuItemContainer}>Top Rated</Text>
          </View>
          <View style={homeStyles.menuItemVerticalDivier}/>
          <View style={homeStyles.menuItemContainer}>
            <Icon name="movie" size={hp(ICON_MENU_STYLE)}/>
            <Text style={homeStyles.textMenuItemContainer}>All Movies</Text>
          </View>
          <View style={homeStyles.menuItemVerticalDivier}/>
          <View style={homeStyles.menuItemContainer}>
            <Icon name="timeline" size={hp(ICON_MENU_STYLE)}/>
            <Text style={homeStyles.textMenuItemContainer}>Trends</Text>
          </View>
        </View>
        <Text accessibilityLabel="Text" style={homeStyles.titleText}>Genres</Text>
        <FlatList data={props.allGenresList}
                  style={homeStyles.genreList}
                  horizontal={true}
                  initialNumToRender={4}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  renderItem={item => renderGenreList(item.item)}/>
        <Text accessibilityLabel="Text" style={homeStyles.titleText}>Top Rated Movies</Text>
        <FlatList style={homeStyles.flatList}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  initialNumToRender={4}
                  keyExtractor={item => item.id.toString()}
                  data={props.topRatedMovies}
                  renderItem={item => renderList(item.item)}/>
      </ScrollView>

    </View>
  );
};


export default HomeComponent;
