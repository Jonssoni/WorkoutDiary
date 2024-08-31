import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import swim from '../assets/swim.png';
import running from '../assets/running.webp';
import bicycling from '../assets/bicycling.webp';
import { TextInput } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker'; // Changed to community picker for better support

const App = () => {
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false); // Hide the date picker after selecting a date
    setDate(currentDate); // Update the date state
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.textRow}>
        <Text style={styles.text}>Select your workout</Text>
      </View>

      {/* Workout Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Run')}>
          <ImageBackground
            source={running}
            style={styles.background}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => alert('Bicycle')}>
          <ImageBackground
            source={bicycling}
            style={styles.background}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => alert('Swim')}>
          <ImageBackground
            source={swim}
            style={styles.background}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      {/* Input Fields for Distance and Duration */}
      <GestureHandlerRootView style={styles.gestureRoot}>
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
      </GestureHandlerRootView>

      {/* Date Picker with Placeholder */}
      <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>
          {date ? date.toDateString() : 'Select Date'} {/* Display selected date or placeholder */}
        </Text>
      </TouchableOpacity>

      {/* Conditional Date Picker */}
      {showDatePicker && (
        <DateTimePicker
          mode="date"
          value={date || new Date()}
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TouchableOpacity style={styles.addworkout}>
        <Text>
          button
        </Text>
      </TouchableOpacity>
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
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#6f9acf',
    marginHorizontal: 10,
    borderRadius: 5,
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
  },
  datePickerButton: {
    
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
 
 
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  addworkout:{
    borderWidth:1,
    margin:20,
    padding:10,
    borderRadius:20,
    alignItems:'center',
    marginBottom:310,

  }
});

export default App;
