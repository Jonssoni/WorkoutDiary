
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';  
import bicycle from '../assets/eggplant.webp';
import MainScreenStyles from '../components/Mainscreenstyle';




const MainScreen = ({ navigation }) => {  
  return (
    <View style={MainScreenStyles.container}>
      <View style={MainScreenStyles.image}>
        <ImageBackground
          source={bicycle}
          style={MainScreenStyles.background}  
        />
      </View>
      <TouchableOpacity
        style={MainScreenStyles.viewbox}
        onPress={() => navigation.navigate('WorkOut')}
      >  
        <Text style={MainScreenStyles.text}>Workout</Text>
      </TouchableOpacity>
      <View style={MainScreenStyles.viewbox}>
        
      <TouchableOpacity
        style={MainScreenStyles.viewbox}
        onPress={() => navigation.navigate('List')}
      >  
        <Text style={MainScreenStyles.text}>List of Workouts</Text>
      </TouchableOpacity>
      </View>
      
      <View style={MainScreenStyles.viewbox}>
      <TouchableOpacity
        style={MainScreenStyles.viewbox}
        onPress={() => navigation.navigate('Settings')}
      > 
        <Text style={MainScreenStyles.text}>Settings</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};



export default MainScreen;
