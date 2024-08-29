
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import run from '../assets/run.webp'

const GetIn = ({ navigation }) => {  
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={run}
        style={styles.background}  
        resizeMode="cover" 
      >
        <Text style={styles.text}>
            Your journey starts here!
        </Text>
    
        <TouchableOpacity
          style={styles.circleButton}
          onPress={() => navigation.navigate('MainScreen')}  
        >
          
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  circleButton: {
    width: 500,  
    height: 700,  
    backgroundColor: 'transparent',  
    justifyContent: 'center',  
    alignItems: 'center',  
    marginTop:50
    
  },

  text: {
marginBottom:1,
fontSize:32,
fontWeight:'bold',
fontFamily:'sans-serif',
textShadowColor: '#8d5d5d',
textShadowOffset: { width: 1, height:4 },
textShadowRadius: 1
  }
});

export default GetIn;  
