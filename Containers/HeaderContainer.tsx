import React from "react";
import { RouteComponentProps } from "react-router";
import HeaderComponent from "../Components/HeaderComponent";


interface HeaderContainerProps extends RouteComponentProps<any> {

}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {


  return (
    <HeaderComponent/>
  )
};


export default HeaderContainer;
