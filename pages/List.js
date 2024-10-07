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
      const miles = workout.originalDistance * 0.621371;
      return `${miles.toFixed(2)} miles`; 
    }
  };

  const calculateWorkoutTotals = () => {
    const totals = {};
    workouts.forEach(workout => {
      if (totals[workout.workoutType]) {
        totals[workout.workoutType].distance += workout.distance;
        totals[workout.workoutType].duration += parseInt(workout.duration, 10); 
      } else {
        totals[workout.workoutType] = {
          distance: workout.distance,
          duration: parseInt(workout.duration, 10), 
        };
      }
    });
    return totals;
  };

  const workoutTotals = calculateWorkoutTotals();


  return (
    <View style={ListStyles.container}>
      <Text style={ListStyles.headertext}>Workout History</Text>
      {Object.keys(workoutTotals).map(workoutType => (
        <View key={workoutType} style={ListStyles.list}>
          <Text style={ListStyles.total}>
            {workoutType} total:
          </Text>
          <Text style={ListStyles.total}>
            Distance: {getDistanceText({ distance: workoutTotals[workoutType].distance, originalDistance: workoutTotals[workoutType].distance })} 
          </Text>
          <Text style={ListStyles.total}>
            Duration: {workoutTotals[workoutType].duration} min
          </Text>
        </View>
      ))}
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
