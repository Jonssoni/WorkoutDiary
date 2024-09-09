import { StyleSheet } from "react-native";


const ListStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column'
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    list: {
      borderWidth:1,
      flex:1,
      width:400,
      margin:20,
      padding:10,
      borderRadius:20,
      alignItems:'center'
    }
  });

  export default ListStyles;