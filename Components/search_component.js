import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function NavigationBar() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navbarItem}>
        <Ionicons name="person" size={24} color="black" />
        <Text style={styles.navbarText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <Ionicons name="search" size={24} color="black" />
        <Text style={styles.navbarText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={styles.navbarText}>Suggestions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <Ionicons name="settings" size={24} color="black" />
        <Text style={styles.navbarText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#C9E4CA',
      paddingVertical: 10,
      position: 'absolute', // Position the navbar at the bottom
      bottom: 0, // Stick it to the bottom of the screen
      left: 0,
      right: 0,
    },
    navbarItem: {
      alignItems: 'center',
    },
    navbarText: {
      color: 'black',
    },
  });

export default NavigationBar;