import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import swim from '../assets/swim.png';
import running from '../assets/running.webp';
import bicycling from '../assets/bicycling.webp'

const App = () => {
  return (
    <View style={styles.container}>
      {/* Text Row at the top */}
      <View style={styles.textRow}>
        <Text style={styles.text}>Select your workout</Text>
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Run')}>
        <ImageBackground
            source={running} // Make sure `swim` is a valid image source, like require('./path/to/image.png')
            style={styles.background}
            resizeMode="cover"
          >
         
           
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => alert('Bicycle')}>
        <ImageBackground
            source={bicycling} // Make sure `swim` is a valid image source, like require('./path/to/image.png')
            style={styles.background}
            resizeMode="cover"
          >
         
           
          </ImageBackground>
        </TouchableOpacity>

        {/* Button with ImageBackground */}
        <TouchableOpacity style={styles.button} onPress={() => alert('Swim')}>
          <ImageBackground
            source={swim} // Make sure `swim` is a valid image source, like require('./path/to/image.png')
            style={styles.background}
            resizeMode="cover"
          >
         
           
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 15,
    borderRadius: 20,
    justifyContent: 'flex-start',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   
    padding: 10,
    marginBottom: 20,
    borderRadius:10
  },
  text: {
    color: 'black',
    fontSize:20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#6f9acf',
    marginHorizontal: 10,
    borderRadius: 50,
    height: 100,
    width:100
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end', // Positions content towards the bottom of the background
    alignItems: 'center',
    margin:25
  },
  buttonText: {
    color: '#FFFFFF',
  },
 
});

export default App;
