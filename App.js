import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from './src/screens/Explore'
import Subscribe from './src/screens/Subscribe'
import Constant from 'expo-constants'
import { Provider, useSelector } from "react-redux"
import { createStore, combineReducers } from 'redux'
import { reducer } from "./src/reducers/reducer";
import { themeReducer } from "./src/reducers/themeReducer";

const customDarkTheme = {
  ...DarkTheme,
  color: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'purple'
  }
}


const customDefaultTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black'
  }
}

const rootReducer = combineReducers({
  cardData: reducer,
  darkMode: themeReducer
})
const store = createStore(rootReducer)

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home'
          } else if (route.name === 'explore') {
            iconName = 'explore'
          } else if (route.name === 'subscribe') {
            iconName = 'subscriptions'
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name='home' component={Home} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='subscribe' component={Subscribe} />
    </Tabs.Navigator>
  )
}

export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
export function Navigation() {

  let myTheme = useSelector(state => {
    return state.darkMode
  })
  return (
      <NavigationContainer theme={myTheme ? customDarkTheme : customDefaultTheme}>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='rootHome' component={RootHome} />
          <Stack.Screen name='search' component={Search} />
          <Stack.Screen name='videoPlayer' component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}