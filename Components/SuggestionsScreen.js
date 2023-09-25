import React from 'react';
import { View, Text, Pressable} from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';



const SuggestionsScreen = () => {
  
async function onPress() {
  const dataFirst = await fetch('https://api.chucknorris.io/jokes/random') //henter data fra api
  const dataJSON = await dataFirst.json(); //laver data til json
  setData(JSON.stringify(dataJSON.value)); //setdata laver data det hentede fra api om til string
 
}
  const [data, setData] = useState(''); //tager det hentet data fra api'en
  return (
    <SafeAreaView> 
    <View>
      <Text>Se forslag til uddannelser her</Text>
      <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>klik</Text>
      
    </Pressable>
    <Text>
    {data !== '' ? data : ''} 
    </Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default SuggestionsScreen;
