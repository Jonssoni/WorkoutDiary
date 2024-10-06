import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import ListStyles from '../components/Listscreen'
import { WorkoutContext } from './WorkoutContext'; 
import deleteImage from '../assets/delete1.webp'
import { DistanceContext } from './DistanceContext';



const WorkOutListScreen = () => {
  const { workouts, removeWorkout } = useContext(WorkoutContext); 
  const { isMetric } = useContext(DistanceContext);

  const handleDelete = (index) => {
    removeWorkout(index);
  };

  const getDistanceText = (workout) => {
    if (isMetric) {
      return `${workout.distance} km`; 
    } else {
      const miles = workout.originalDistance * 0.621371; // Convert km to miles
      return `${miles.toFixed(2)} miles`; 
    }
  };

  return (
    <View style={ListStyles.container}>
      <Text style={ListStyles.headertext}>Workout History</Text>
      <ScrollView>
        {workouts.length > 0 ? (
          workouts.map((workout, index) => (
            <View key={index} style={ListStyles.list}>
              <Text style={ListStyles.text}>
                Workout Type: {workout.workoutType}
              </Text>
              <Text style={ListStyles.text}>
              Distance: {getDistanceText(workout)}
            </Text>
              <Text style={ListStyles.text}>
                Duration: {workout.duration} min
              </Text>
              <Text style={ListStyles.text}>
                Date: {workout.date ? new Date(workout.date).toDateString() : 'N/A'}
              </Text>
              <TouchableOpacity onPress={() => handleDelete(index)} style={ListStyles.deleteButton}>
                <Image source={deleteImage} style={ListStyles.deleteImage} />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={ListStyles.text}>Add your first workout.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default WorkOutListScreen;
