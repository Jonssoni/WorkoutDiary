import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WorkOut = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WorkOut Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WorkOut;