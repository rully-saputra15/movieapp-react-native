import React from "react";
import { FlatList, View } from "react-native";
import { AllMovies } from "../state";
import { Avatar, ListItem } from "react-native-elements";
import { IMAGE_URL } from "../settings";
import { homeStyles } from "../Styles/HomeStyle";


interface AppComponentProps {
  name: string,
  setNameText: (input: string) => void,
  data: AllMovies[],
  goToAbout: () => void;
  goToDetailMovie: (id: string) => void;
}


const HomeComponent: React.FC<AppComponentProps> = (props: AppComponentProps) => {

  const renderList = (item: AllMovies) => {
    return <ListItem key={item.id} bottomDivider style={homeStyles.flatListItem}
                     onPress={() => props.goToDetailMovie(item.id.toString())}>
      <Avatar rounded source={{ uri: IMAGE_URL + item.posterPath }}/>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{"Popularity: " + item.popularity.toString()}</ListItem.Subtitle>
      </ListItem.Content>

    </ListItem>;

  };

  return (
    <View style={homeStyles.mainView}>
      {/*<Text style={styles.titleText}>Hallo, {props.name}</Text>*/}
      {/*<FastImage style={styles.image}*/}
      {/*           source={{*/}
      {/*             uri: "https://reactnative.dev/docs/assets/p_cat2.png",*/}
      {/*             priority: FastImage.priority.normal*/}
      {/*           }}*/}
      {/*           resizeMode={FastImage.resizeMode.contain}*/}
      {/*/>*/}
      {/*<TextInput style={styles.nameTextInput}*/}
      {/*           placeholder={"Insert a new name"}*/}
      {/*           onChangeText={(text) => props.setNameText(text)} />*/}
      {/*<Button onPress={props.goToAbout}*/}
      {/*        title="Go TO About"*/}
      {/*/>*/}
      <FlatList style={homeStyles.flatList}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                data={props.data}
                renderItem={item => renderList(item.item)}/>
    </View>
  );
};


export default HomeComponent;
