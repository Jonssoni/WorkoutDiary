import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WorkoutContext } from './WorkoutContext';
import WorkoutForm from './WorkoutForm'; 
import WorkOutStyles from '../components/WorkOutscreenstyle';

const WorkoutScreen = () => {
  const { addWorkout } = useContext(WorkoutContext);
  const navigation = useNavigation();
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleFormSubmit = (data) => {
    addWorkout(data);
    navigation.navigate('List');
  };

  const handleSelectWorkout = (workout) => {
    setSelectedWorkout(workout);
  };

  return (
    <View style={WorkOutStyles.container}>
      <Text style={WorkOutStyles.text}>Select your workout</Text>
      <WorkoutForm 
        onSubmit={handleFormSubmit}
        selectedWorkout={selectedWorkout}
        onSelectWorkout={handleSelectWorkout}  
      />
    </View>
  );
};

export default WorkoutScreen;
