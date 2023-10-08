import GlobalStyles from '../globalStyles/GlobalStyles';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

function Status() {
  const [isPressed, setIsPressed] = useState(false);

  // Funktion til at ændre knappens tilstand ved tryk

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={GlobalStyles.touchableObject}>
      <Text style = {GlobalStyles.headlineText}> Hvad skal du i morgen? </Text>
      <TouchableOpacity onPress={handlePress} style={GlobalStyles.button}>
        <Text>Tryk her for at se det</Text>
      </TouchableOpacity>
      <View style={GlobalStyles.textBox}>
      <Text> {isPressed ? 'Sut' : 'Pik'}</Text>
    </View>
    </View>
  );
}


export default Status;
