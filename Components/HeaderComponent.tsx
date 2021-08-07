import React from "react";
import { Header } from "react-native-elements";

interface HeaderComponentProps {

}


const HeaderComponent: React.FC<HeaderComponentProps> = () => {

  return (
    <Header placement="left"
            leftComponent={{ icon: "menu", color:'#fff' }}
            centerComponent={{text: "Home", style: { color: "#fff" }}}
            containerStyle={{
      backgroundColor: "#0F3C51",
      alignItems:"center",
    }} />

  );
};

export default HeaderComponent;
