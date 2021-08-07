import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { modalFavoriteStyles } from "../../Styles/ModalFavoriteStyle";
import { Icon } from "react-native-elements";

interface ModalFavoriteComponentProps {
  movieId: number;
  isVisible: boolean;
  addToFavoriteMovie: () => void;
  closeModalFavorite: () => void;
}


const ModalFavoriteComponent: React.FC<ModalFavoriteComponentProps> = (props: ModalFavoriteComponentProps) => {

  return (
    <Modal visible={props.isVisible}
           animationType="slide"
           transparent={true}
           onRequestClose={() => props.closeModalFavorite}>
      <View style={modalFavoriteStyles.mainView}>
        <View style={modalFavoriteStyles.modalView}>
          <Pressable
            style={modalFavoriteStyles.button}
            onPress={props.addToFavoriteMovie}>
            <View style={modalFavoriteStyles.buttonMainContent}>
              <Icon type="ionicon" name="heart"/>
              <Text>Add To Favorite</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};


export default ModalFavoriteComponent;
