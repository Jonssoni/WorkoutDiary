import { StyleSheet } from "react-native";

const MainScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#E9FAE3',
      borderTopWidth:1
    },
    text: { 
      fontSize: 20,
      textAlign: 'center',
      padding:5,
      marginVertical: 10,
      color: '#0c0c0c',  
      marginTop:15
    },
    viewbox: {
      backgroundColor:'#c6d8c0',
      margin: 20,
      height:90,
      width:320,
      alignSelf:'center',
      justifyContent: 'center',
      borderWidth:1.5,
      elevation: 20,
      shadowColor: '#0b0c0b',
      borderRadius:10,
      
    },
    image: {
      margin: 5,
      padding:25,
      borderBottomColor:'black',
      height:400,
      width:350,
      alignSelf:'center',
     
    },
    background: {
      flex: 1,
      justifyContent: 'center',  
      alignItems: 'center', 
      margin:5,
    }
  });

  export default MainScreenStyles;