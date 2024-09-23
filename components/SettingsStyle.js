import { StyleSheet } from "react-native";

const SettingsStyle = {
  style1: StyleSheet.create({
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
  }),

  style2: StyleSheet.create({
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
  })
};

export default SettingsStyle;
