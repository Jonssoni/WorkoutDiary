
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';  
import bicycle from '../assets/bicycle.webp';

const MainScreen = ({ navigation }) => {  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.viewbox}
        onPress={() => navigation.navigate('WorkOut')}
      >  
        <Text style={styles.text}>Work out</Text>
      </TouchableOpacity>
      <View style={styles.viewbox}>
        
        <Text style={styles.text}>List of workouts</Text>
      </View>
      <View style={styles.viewbox}>
        <Text style={styles.text}>Settings</Text>
      </View>
      <View style={styles.image}>
        <ImageBackground
          source={bicycle}
          style={styles.background}  
          resizeMode="resize" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#AEB4A9',
  },
  text: { 
    fontSize: 18,
    textAlign: 'center',
    padding:5,
    marginVertical: 10,
    color: '#0c0c0c',  
    marginTop:25
  },
  viewbox: {
    backgroundColor: '#E0C1B3',
    margin: 30,
    borderRadius:10,
    shadowColor:'#e90b0b',
    height:100,
    width:300,
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 10,
    padding:20,
    borderBottomColor:'black',
    height:300,
    width:470,
    alignSelf:'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center', 
    margin:5,
  }
});

export default MainScreen;
