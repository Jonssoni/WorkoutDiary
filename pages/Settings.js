import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Settings = () => {
  const [checked, setChecked] = useState('style1'); // Default to Style Set 1

  // Style Set 1
  const style1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      color: 'darkblue',
    },
  });

  // Style Set 2
  const style2 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      color: 'darkgreen',
    },
  });

  // Apply selected style based on the chosen radio button
  const selectedStyle = checked === 'style1' ? style1 : style2;

  return (
    <View style={selectedStyle.container}>
      <Text style={selectedStyle.text}>Settings Screen</Text>

      {/* First Radio Button - Apply Style 1 */}
      <View style={styles.optionContainer}>
        <Text>Style Set 1</Text>
        <RadioButton
          value="style1"
          status={checked === 'style1' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('style1')}
        />
      </View>

      {/* Second Radio Button - Apply Style 2 */}
      <View style={styles.optionContainer}>
        <Text>Style Set 2</Text>
        <RadioButton
          value="style2"
          status={checked === 'style2' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('style2')}
        />
      </View>
    </View>
  );
};

// Additional styles for the radio button container
const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default Settings;
