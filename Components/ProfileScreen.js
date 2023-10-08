import GlobalStyles from '../globalStyles/GlobalStyles';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');
  const [preferredArea, setPreferredArea] = useState('Preferred Area');
  const [fagFraUni, setPreferredfagFraUni] = useState('Fag fra gymnasiet')

  const handleSaveProfile = () => {
    // Skriv funktion her
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.profileHeadline}>Mere information om dig</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true} // To hide password characters
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Preferred Area"
        value={preferredArea}
        onChangeText={(text) => setPreferredArea(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="fagFraUni"
        value={fagFraUni}
        onChangeText={(text) => setPreferredfagFraUni(text)}
      />

      <Button style={GlobalStyles.button} title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ProfileScreen;
