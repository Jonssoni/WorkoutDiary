import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WorkOut = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
<Text style={styles.text}>
This is the list of your workouts. keep going!
</Text>
      </View >
      <View style={styles.list}>
<Text>
hah
</Text>
      </View>
      <View style={styles.list}>
<Text>
  ahh
</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    borderWidth:1,
    flex:1,
    width:400,
    margin:20,
    padding:10,
    borderRadius:20,
    alignItems:'center'
  }
});

export default WorkOut;