import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Button 1 pressed')}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Button 2 pressed')}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Button 3 pressed')}>
        <Text style={styles.buttonText}>Button 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between',  
    padding: 15, 
    borderWidth:1,
    margin:10,
    borderRadius:20
  },
  button: {
    flex: 1,  
    backgroundColor: '#c6cfda',  
    paddingVertical: 20,  
    marginHorizontal: 5,  
    borderRadius: 8,  
    alignItems: 'center',  
    
  
  },
  buttonText: {
    color: '#FFFFFF',  
  },
});

export default App;
