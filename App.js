import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './app/views/Home.js';
import { Passbook } from './app/sections/Passbook.js';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            },
          }} />
        <Stack.Screen name="Passbook" component={Passbook} options={{
          title: 'Passbook',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

