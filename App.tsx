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
import { useImmerReducer } from "use-immer";
import { dataReducer } from "./reducers";
import { initialDataState, Context } from "./store";
import FavoriteContainer from "./Containers/FavoriteContainer";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export type MainBottomTabParamList = {
  Home: undefined;
  About: undefined;
  Favorite: undefined;
  MovieDetail: undefined;
}

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Favorite: undefined;
  MovieDetail: { id: string };
}
const getHeaderTitle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'About':
      return 'About';
    case 'Favorite':
      return 'Favorite';
  }
}
const App = () => {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();
  const [store, dispatch] = useImmerReducer(dataReducer, initialDataState);
  const Home = () => {
    return (
      <BottomTab.Navigator screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline'
          } else if (route.name == 'About') {
            iconName = focused
              ? 'person-circle'
              : 'person-circle-outline'
          } else if (route.name == 'Favorite') {
            iconName = focused
              ? 'heart'
              : 'heart-outline'
          }

          return <Icon type="ionicon" name={iconName ? iconName : ""}/>
        }
      })}
                           tabBarOptions={{
                             activeTintColor: '#177090',
                             inactiveTintColor: '#AEC1D0'
                           }}
      >
        <BottomTab.Screen name="Home" component={HomeContainer}/>
        <BottomTab.Screen name="Favorite" component={FavoriteContainer}/>
        <BottomTab.Screen name="About" component={AboutContainer}/>
      </BottomTab.Navigator>
    )
  }
  return (
    // @ts-ignore
    <Context.Provider value={[store, dispatch]}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator mode="modal" headerMode="float" screenOptions={{
            headerTintColor: "black", headerStyle: {
              backgroundColor: '#86ABBE',
            }
          }}>
            <Stack.Screen name="Home" component={Home} options={({ route }) => ({
              headerTitle: getHeaderTitle(route)
            })}/>
            <Stack.Screen name="About" component={AboutContainer} options={({ route }) => ({
              headerTitle: getHeaderTitle(route)
            })}/>
            <Stack.Screen name="MovieDetail" component={MovieDetailContainer} options={{ title: "Movie Detail" }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Context.Provider>
  )
    ;
};


export default App;
