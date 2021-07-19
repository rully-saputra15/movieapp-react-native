/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import HomeContainer from "./Containers/HomeContainer";
import AboutContainer from "./Containers/AboutContainer";
import HeaderContainer from "./Containers/HeaderContainer";
import { SafeAreaProvider } from "react-native-safe-area-view";
import MovieDetailContainer from "./Containers/MovieDetailContainer";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

export type MainBottomTabParamList = {
  Home: undefined;
  About: undefined;
  MovieDetail: undefined;
}

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  MovieDetail: {id: string};
}
const App = () => {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeContainer} options={{ title: "Home" }}/>
          <Stack.Screen name="About" component={AboutContainer} options={{ title: "About" }}/>
          <Stack.Screen name="MovieDetail" component={MovieDetailContainer} options={{ title: "Movie Detail" }}/>
        </Stack.Navigator>
        {/*<BottomTab.Navigator initialRouteName="Home" screenOptions={({route} : any) =>({*/}
        {/*  tabBarIcon:({focused, color, size}) => {*/}
        {/*    let iconName;*/}
        {/*    if (route.name === 'Home'){*/}
        {/*      iconName = focused*/}
        {/*      ? 'home'*/}
        {/*        : 'home-outline'*/}
        {/*    } else if(route.name == 'About'){*/}
        {/*      iconName = focused*/}
        {/*      ? 'person-circle'*/}
        {/*        : 'person-circle-outline'*/}
        {/*    }*/}
        {/*    return <Icon type="ionicon" name={iconName ? iconName : ""} />*/}
        {/*  }*/}
        {/*})}*/}
        {/*  tabBarOptions={{*/}
        {/*    activeTintColor:'#177090',*/}
        {/*    inactiveTintColor:'#AEC1D0'*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <BottomTab.Screen name="Home" component={HomeContainer} options={{ title: "Home" }}/>*/}
        {/*  <BottomTab.Screen name="About" component={AboutContainer} options={{ title: "About" }}/>*/}
        {/*</BottomTab.Navigator>*/}
      </NavigationContainer>

    </SafeAreaProvider>
  );
};


export default App;
