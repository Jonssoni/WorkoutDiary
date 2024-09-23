import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import swim from '../assets/swim.png';
import running from '../assets/running.webp';
import bicycling from '../assets/bicycling.webp';
import WorkOutStyles from '../components/WorkOutscreenstyle'; 

const WorkoutForm = ({ onSubmit, selectedWorkout, onSelectWorkout }) => {
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(null);
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
      <View style={WorkOutStyles.buttonsContainer}>
        <TouchableOpacity 
          style={[WorkOutStyles.button, selectedWorkout === 'Running' && WorkOutStyles.selectedButton]}
          onPress={() => onSelectWorkout('Running')}
        >
          <ImageBackground source={running} style={WorkOutStyles.background} resizeMode="cover" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[WorkOutStyles.button, selectedWorkout === 'Bicycling' && WorkOutStyles.selectedButton]}
          onPress={() => onSelectWorkout('Bicycling')}
        >
          <ImageBackground source={bicycling} style={WorkOutStyles.background} resizeMode="cover" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[WorkOutStyles.button, selectedWorkout === 'Swimming' && WorkOutStyles.selectedButton]}
          onPress={() => onSelectWorkout('Swimming')}
        >
          <ImageBackground source={swim} style={WorkOutStyles.background} resizeMode="cover" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={WorkOutStyles.datePickerButton} onPress={() => setShowDatePicker(true)}>
        <Text style={WorkOutStyles.dateText}>{date ? date.toDateString() : 'Select Date'}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker 
          mode="date" 
          value={date || new Date()} 
          display="default" 
          onChange={handleDateChange} 
        />
      )}

      <TextInput
        label="Distance (km)"
        value={distance}
        onChangeText={setDistance}
        style={WorkOutStyles.input}
        mode="outlined"
        keyboardType="numeric"
      />

      <TextInput
        label="Duration (min)"
        value={duration}
        onChangeText={setDuration}
        style={WorkOutStyles.input}
        mode="outlined"
        keyboardType="numeric"
      />

      <TouchableOpacity style={WorkOutStyles.addworkout} onPress={handleSubmit}>
        <Text style={WorkOutStyles.selectText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutForm;
