
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import run from '../assets/run.webp'
import GetInStyles from '../components/GetInstyle';

const GetIn = ({ navigation }) => {  
  return (
    <View style={GetInStyles.container}>
      
      <ImageBackground
        source={run}
        style={GetInStyles.background}  
        resizeMode="cover" 
      >
        <Text style={GetInStyles.text}>
            Your journey starts here!
        </Text>
    
        <TouchableOpacity
          style={GetInStyles.circleButton}
          onPress={() => navigation.navigate('MainScreen')}  
        >
          
          <Text style={GetInStyles.buttonText}></Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};



export default GetIn;  
