import { StyleSheet } from "react-native";

const WorkOutStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      margin: 10,
      borderRadius: 15,
      justifyContent: 'flex-start',
      backgroundColor:'#E9FAE3',
      borderWidth:1.5,
      elevation: 20,
      shadowColor: '#0b0c0b',
    
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
      margin:15,
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

  export default WorkOutStyles;