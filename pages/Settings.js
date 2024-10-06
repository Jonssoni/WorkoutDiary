import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { DistanceContext } from './DistanceContext'; 
import SettingsStyle from '../components/SettingsStyle';


const Settings = () => {
  const { isMetric, toggleDistanceUnit } = useContext(DistanceContext);

  return (
   
    <View style={SettingsStyle.switchContainer}>
      <Text style={SettingsStyle.textstyle}>Use Kilometers</Text>
      <Switch 
        value={isMetric} 
        onValueChange={toggleDistanceUnit} 
      />
    </View>

  
  );
};

const styles = StyleSheet.create({


  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default Settings;
