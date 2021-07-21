import React from "react";
import { FlatList, Pressable, TouchableOpacity, View } from "react-native";
import { FavoriteMovie } from "../state";
import { favoriteMovieStyle } from "../Styles/FavoriteMovieStyle";
import { Avatar, ListItem, Rating } from "react-native-elements";
import { IMAGE_URL } from "../settings";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface FavoriteComponentProps {
  data: FavoriteMovie[],
  removeFavoriteMovie: (id: number) => void;
  goToDetailMovie: (id: number) => void;
}


const FavoriteComponent: React.FC<FavoriteComponentProps> = (props: FavoriteComponentProps) => {
  const contentList = (item: FavoriteMovie) => {
    return (
      <ListItem bottomDivider>
        <Avatar source={{
          uri: IMAGE_URL + item.posterPath
        }}/>
        <ListItem.Content>
          <ListItem.Title style={favoriteMovieStyle.flatListTitle}>{item.title}</ListItem.Title>
          <ListItem.Subtitle>
            <Rating type="star" readonly ratingColor="yellow" startingValue={item.voteAverage / 2}
                    imageSize={hp('2%')}/>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  const renderItemList = (item: FavoriteMovie) => {
    return <Pressable key={item.id}
                      delayLongPress={100}
                      android_ripple={{ color: "#808080", radius: 30 }}
                      onPress={() => props.goToDetailMovie(item.id)}
                      onLongPress={() => props.removeFavoriteMovie(item.id)}>
      {contentList(item)}
    </Pressable>
  }
  return (
    <View style={favoriteMovieStyle.mainView}>
      <FlatList data={props.data}
                style={favoriteMovieStyle.flatListStyle}
                keyExtractor={item => item.id.toString()}
                renderItem={item => renderItemList(item.item)}/>

    </View>

  );
};


export default FavoriteComponent;
