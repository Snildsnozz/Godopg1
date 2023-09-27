import 'react-native-gesture-handler';
import * as React from 'react';
//import React, { useState } from 'react'; // Import useState correctly
//import TabNavigator from './Components/TabNavigator';
//import { View, Button, Text} from 'react-native'; // Import Button from react-native
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './Components/SearchScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={SearchScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

      //<TabNavigator />
   
    );
  }

export default App;
