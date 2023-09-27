import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import ProfileScreen from './ProfileScreen';
import SuggestionsScreen from './SuggestionsScreen';
import SettingsScreen from './SettingsScreen';
import SearchScreen from './SearchScreen';
import { SafeAreaView } from 'react-native';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>    
    <NavigationContainer>
      {/* tab bar should be displayed in the bottum of the screen show me the code */}
      <Tab.Navigator
        initialRouteName="Profile"
        tabBarOptions={{
          // activeTintColor: 'blue',
          // display: 'absolute',
          // flex: '1',
          // alignItems: 'center',
          // justifyContent: 'center',
          // inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="profile" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Suggestions"
          component={SuggestionsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="customerservice" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" size={size} color={color} />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}
export default TabNavigator;
