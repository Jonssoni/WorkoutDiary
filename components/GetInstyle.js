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
  marginTop:60,
  fontSize:30,
  textShadowOffset: { width: 1, height:1 },
 fontWeight:'bold'
    }
  });

  export default GetInStyles;