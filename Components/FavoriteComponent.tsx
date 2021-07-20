import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { FavoriteMovie } from "../state";
import { favoriteMovieStyle } from "../Styles/FavoriteMovieStyle";
import { Avatar, ListItem } from "react-native-elements";
import { IMAGE_URL } from "../settings";

interface FavoriteComponentProps {
  data: FavoriteMovie[],
  removeFavoriteMovie: (id: number) => void;
}


const FavoriteComponent: React.FC<FavoriteComponentProps> = (props: FavoriteComponentProps) => {
  const contentList = (item: FavoriteMovie) => {
    return (
      <ListItem bottomDivider>
        <Avatar source={{
          uri: IMAGE_URL + item.posterPath
        }}/>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.voteAverage}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  const renderItemList = (item: FavoriteMovie) => {
    return <TouchableOpacity key={item.id}
                             activeOpacity={95}
                             onLongPress={() => props.removeFavoriteMovie(item.id)}>
      {contentList(item)}
    </TouchableOpacity>
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
