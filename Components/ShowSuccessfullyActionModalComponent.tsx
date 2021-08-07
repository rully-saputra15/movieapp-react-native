import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { successfullyActionModalStyles } from "../Styles/successfullyActionModalStyle";

interface LoadingComponentProps {
  isVisible: boolean;
  message:string;
  closeModal: () => void;
}


const ShowSuccessfullyActionModalComponent: React.FC<LoadingComponentProps> = (props: LoadingComponentProps) => {

  return (
    <Modal visible={props.isVisible}
           animationType="fade"
           presentationStyle="overFullScreen"
           transparent={true}
           onRequestClose={() => props.closeModal}>
      <View style={successfullyActionModalStyles.mainView}>
        <View style={successfullyActionModalStyles.modalView}>
          <Pressable
            style={successfullyActionModalStyles.button}
            onPress={props.closeModal}>
            <View style={successfullyActionModalStyles.buttonMainContent}>
              <Icon type="ionicon" color="#228B22" name="checkmark-circle" size={40}/>
              <Text style={successfullyActionModalStyles.captionText}>{props.message}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ShowSuccessfullyActionModalComponent;
