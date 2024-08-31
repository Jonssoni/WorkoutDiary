
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
    backgroundColor: '#E9FAE3',
  },
  text: { 
    fontSize: 18,
    textAlign: 'center',
    padding:5,
    marginVertical: 10,
    color: '#0c0c0c',  
    marginTop:20
  },
  viewbox: {
    backgroundColor:'#E9FAE3',
    margin: 30,
    borderRadius:10,
    height:80,
    width:250,
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    elevation: 20,
    shadowColor: '#0b0c0b',
    
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
