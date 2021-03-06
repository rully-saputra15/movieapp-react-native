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
import { SafeAreaProvider } from "react-native-safe-area-view";
import MovieDetailContainer from "./Containers/MovieDetailContainer";
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { useImmerReducer } from "use-immer";
import { dataReducer } from "./reducers";
import { Context, initialDataState } from "./store";
import FavoriteContainer from "./Containers/FavoriteContainer";
import { useFonts } from "expo-font";
import LoadingComponent from "./Components/Common/LoadingComponent";
import ShowSuccesfullyActionModalContainer from "./Containers/ShowSuccesfullyActionModalContainer";


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

  let [fontsLoaded] = useFonts({
    'Montserrat-Light': require('./assets/fonts/montserrat/Montserrat-Light.ttf'),
    'Montserrat-Regular': require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./assets/fonts/montserrat/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
    'Montserrat-Black': require('./assets/fonts/montserrat/Montserrat-Black.ttf'),
  })
  const Home = () => {
    return (
      <BottomTab.Navigator screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused }) => {
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
        <BottomTab.Screen name="Favorite" component={FavoriteContainer}
                          options={{ tabBarBadge: store.FavoriteMovie.length > 0 ? store.FavoriteMovie.length : undefined }}/>
        <BottomTab.Screen name="About" component={AboutContainer}/>
      </BottomTab.Navigator>
    )
  }
  if (!fontsLoaded) {
    return <LoadingComponent/>
  } else {
    // @ts-ignore
    return <Context.Provider value={[store, dispatch]}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator mode="modal" headerMode="float" screenOptions={{
            headerTintColor: "black", headerStyle: {
              backgroundColor: '#86ABBE',
            }
          }}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="About" component={AboutContainer} options={({ route }) => ({
              headerTitle: getHeaderTitle(route)
            })}/>
            <Stack.Screen name="MovieDetail" component={MovieDetailContainer} options={{ title: "Movie Detail" }}/>
          </Stack.Navigator>
        </NavigationContainer>
        <ShowSuccesfullyActionModalContainer/>
      </SafeAreaProvider>
    </Context.Provider>

  }

}


export default App;
