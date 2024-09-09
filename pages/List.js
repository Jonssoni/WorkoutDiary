import React from 'react';
import ListStyles from '../components/Listscreen';
import { View, Text } from 'react-native';

const WorkOut = () => {
  return (
    <View style={ListStyles.container}>
      <View style={ListStyles.list}>
<Text style={ListStyles.text}>
This is the list of your workouts. keep going!
</Text>
      </View >
      <View style={ListStyles.list}>
<Text>
hah
</Text>
      </View>
      <View style={ListStyles.list}>
<Text>
  ahh
</Text>
      </View>
    </View>
  );
};



export default WorkOut;