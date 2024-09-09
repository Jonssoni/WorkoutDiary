import { StyleSheet } from "react-native";

const MainScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: '#d4bae9',
      margin:10,
      borderWidth:1.5,
      borderRadius:15,
  
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
      backgroundColor:'#a9db68',
      margin: 20,
      borderRadius:10,
      height:100,
      width:300,
      alignSelf:'center',
      justifyContent: 'center',
      borderWidth:1.5,
      elevation: 20,
      shadowColor: '#0b0c0b',
      
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