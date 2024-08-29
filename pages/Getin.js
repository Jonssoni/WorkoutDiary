// pages/GetIn.js
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
          
          <Text style={styles.buttonText}>ENTER</Text>
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
    width: 200,  
    height: 200,  
    borderRadius: 100,  
    backgroundColor: 'transparent',  
    justifyContent: 'center',  
    alignItems: 'center',  
    marginBottom:150,
  },
  buttonText: {
    fontSize: 24,  
    fontWeight: 'bold',  
    color: 'white',
    flex:1,
    fontFamily:'sans-serif-condensed',
    padding:10, 
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
marginBottom:300,
fontSize:25,
fontWeight:'500',
fontFamily:'sans-serif-condensed'
  }
});

export default GetIn;  
