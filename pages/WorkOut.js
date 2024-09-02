import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import swim from '../assets/swim.png';
import running from '../assets/running.webp';
import bicycling from '../assets/bicycling.webp';
import DateTimePicker from '@react-native-community/datetimepicker';


const WorkoutForm = ({ onSubmit, selectedWorkout, onSelectWorkout }) => {
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSubmit = () => {
    if (!distance || !duration || !selectedWorkout) {
      alert('Please fill in all fields and select a workout');
      return;
    }
    onSubmit({ distance, duration, date, workoutType: selectedWorkout });
  };

  return (
    <View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[styles.button, selectedWorkout === 'running' && styles.selectedButton]}
          onPress={() => onSelectWorkout('running')}
        >
          <ImageBackground source={running} style={styles.background} resizeMode="cover" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, selectedWorkout === 'bicycling' && styles.selectedButton]}
          onPress={() => onSelectWorkout('bicycling')}
        >
          <ImageBackground source={bicycling} style={styles.background} resizeMode="cover" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, selectedWorkout === 'swimming' && styles.selectedButton]}
          onPress={() => onSelectWorkout('swimming')}
        >
          <ImageBackground source={swim} style={styles.background} resizeMode="cover" />
        </TouchableOpacity>
      </View>

    
      <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>{date ? date.toDateString() : 'Select Date'}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker mode="date" value={date || new Date()} display="default" onChange={handleDateChange} />
      )}

  
      <TextInput
        label="Distance (km)"
        value={distance}
        onChangeText={setDistance}
        style={styles.input}
        mode="outlined"
        keyboardType="numeric"
      />

      <TextInput
        label="Duration (min)"
        value={duration}
        onChangeText={setDuration}
        style={styles.input}
        mode="outlined"
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.addworkout} onPress={handleSubmit}>
        <Text>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null); // State to track selected workout

  const handleFormSubmit = (data) => {
    alert(`Workout added: ${data.workoutType}, Distance: ${data.distance} km, Duration: ${data.duration} min, Date: ${data.date ? data.date.toDateString() : 'N/A'}! Have a great exercise!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select your workout</Text>

      {/* Form Component */}
      <WorkoutForm 
        onSubmit={handleFormSubmit} 
        selectedWorkout={selectedWorkout}
        onSelectWorkout={setSelectedWorkout}
      />
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 15,
    borderRadius: 20,
    justifyContent: 'flex-start',
    backgroundColor:'#E9FAE3'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 22,
   fontWeight:'bold',
    margin:30,
    marginLeft:60
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#6f9acf',
    marginHorizontal: 10,
    borderRadius: 15,
    height: 100,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 25,
  },
  input: {
    marginTop: 20,
    backgroundColor: '#fff',
    backgroundColor:'#c6d8c0'
  },
  datePickerButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor:'#c6d8c0'
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  addworkout: {
    borderWidth:1,
    margin:30,
    padding:30,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#c6d8c0'
  },
  selectedButton:
   { borderWidth: 3,
     borderColor: '#030303' },

});

export default App;
