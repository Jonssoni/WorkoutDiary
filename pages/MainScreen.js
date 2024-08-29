import React from 'react';
import { StyleSheet, View, Text } from 'react-native';  

const MainScreen = () => {  
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column', 
        },
      ]}
    >
   
      <View style={styles.viewbox}>
        <Text style={styles.text}>Work out</Text>
      </View>
      <View style={styles.viewbox}>
        <Text style={styles.text}>List of workouts</Text>
      </View>
      <View style={styles.viewbox}>
        <Text style={styles.text}>Settings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#CB997E',
  },
  text: { 
    fontSize: 18,
    textAlign: 'center',
    padding:5,
    marginVertical: 10,
    color: '#000',  
  },
  viewbox: {
    flex: 2,
     backgroundColor: '#FFE8D6',
      margin: 5,
      borderRadius:5,
  }
});

export default MainScreen;  
