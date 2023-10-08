import 'react-native-gesture-handler';
import * as React from 'react';
//import React, { useState } from 'react'; // Import useState correctly
//import TabNavigator from './Components/TabNavigator';
//import { View, Button, Text} from 'react-native'; // Import Button from react-native
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './Components/ProfileScreen';
import SettingsScreen from './Components/SettingsScreen';
import SuggestionsScreen from './Components/SuggestionsScreen';
import HomeScreen from './Components/HomeScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="SuggestionsScreen" component={SuggestionsScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

      //<TabNavigator />
   
    );
  }

export default App;
