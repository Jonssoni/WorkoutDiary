import React, { useContext } from 'react';
import { View, Text, Switch, SafeAreaView } from 'react-native';
import { DistanceContext } from './DistanceContext'; 
import SettingsStyle from '../components/SettingsStyle';


const Settings = () => {
  const { isMetric, toggleDistanceUnit } = useContext(DistanceContext);

  return (
  <SafeAreaView style={SettingsStyle.safearea}>
    <Text style={SettingsStyle.textstyle1}>Change distance unit</Text>
    <View style={SettingsStyle.switchContainer}>
      <Text style={SettingsStyle.textstyle}>miles</Text>
      <Switch 
        value={isMetric} 
        onValueChange={toggleDistanceUnit} 
      />
      <Text style={SettingsStyle.textstyle}>Kilometers</Text>
    </View>
</SafeAreaView>
  
  );
};



export default Settings;
