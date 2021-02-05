import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import COLORS from './src/consts/colors'
import CartScreen from './src/views/screen/CartScreen'
import DetailsScreen from './src/views/screen/DetailsScreen'
import OnBoardScreen from './src/views/screen/OnBoardScreen'
import BottomNavigator from './src/views/navigation/BottomNavigator'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen}/>
        <Stack.Screen name="Home" component={BottomNavigator}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;