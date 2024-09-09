import { StyleSheet } from "react-native";

const GetInStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center',  
    },
    circleButton: {
      width: 500,  
      height: 700,  
      backgroundColor: 'transparent',  
      justifyContent: 'center',  
      alignItems: 'center',  
      marginTop:50
      
    },
  
    text: {
  marginBottom:1,
  fontSize:32,
  fontWeight:'bold',
  fontFamily:'sans-serif',
  textShadowColor: '#8d5d5d',
  textShadowOffset: { width: 1, height:4 },
  textShadowRadius: 1
    }
  });

  export default GetInStyles;